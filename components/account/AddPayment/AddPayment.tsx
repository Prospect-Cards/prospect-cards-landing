import * as Stripe from '@stripe/stripe-js'
import * as Yup from 'yup'
import { AddPaymentQuery, SyncPaymentMutationFn } from 'types/graphql'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Form, Formik, FormikHelpers } from 'formik'
import { Grid, Typography } from '@material-ui/core'
import { StripeTextField } from 'components/stripe/StripeTextField'
import { toast } from 'react-toastify'
import ErrorMessage from 'components/common/ErrorMessage'
import FormTextField from 'components/common/formFields/FormTextField'
import LoadingButton from 'components/common/LoadingButton'
import React, { useState } from 'react'

interface Props {
  data: AddPaymentQuery;
  syncPayment: SyncPaymentMutationFn;
}

type Values = Required<
Pick<Stripe.PaymentMethodCreateParams.BillingDetails, 'name' | 'address'>
>;

const PaymentSchema = Yup.object()
  .shape({
    name: Yup.string().required('Required'),
    address: Yup.object().shape({
      line1: Yup.string().required('Required'),
      line2: Yup.string(),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
    }),
  })
  .defined()

const AddPayment = ({
  data: {
    stripeSetupIntentId,
    viewer: { paymentMethod },
  },
  syncPayment,
}: Props): JSX.Element => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  const initialValues: Values = {
    name: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      country: 'US',
    },
  }

  const handleSubmit = async(
    values: Values,
    { resetForm }: FormikHelpers<Values>,
  ) => {
    setLoading(true)
    const cardElement = elements?.getElement(CardElement)

    // When the customer clicks on the button, redirect them to Checkout.
    if (!stripe || !cardElement) return <ErrorMessage />
    const { error, setupIntent } = await stripe.confirmCardSetup(
      stripeSetupIntentId,
      {
        payment_method: {
          card: cardElement,
          billing_details: values,
        },
      },
    )

    if (error) {
      toast.error(error.message)
    } else {
      if (setupIntent?.payment_method) {
        await syncPayment({
          variables: { paymentMethodId: setupIntent.payment_method },
        })
      }
      cardElement.clear()
      resetForm()
    }

    setLoading(false)
  }

  return (
    <Grid container>
      {paymentMethod && (
        <Grid item xs={ 12 }>
          <Typography>{paymentMethod.brand}</Typography>
          <Typography>xxxx-xxxx-xxxx-{paymentMethod.last4}</Typography>
        </Grid>
      )}
      <Formik<Values>
        initialValues={ initialValues }
        onSubmit={ handleSubmit }
        validationSchema={ PaymentSchema }
      >
        {() => (
          <Form>
            <Grid container spacing={ 2 }>
              <Grid item md={ 12 }>
                <StripeTextField
                  label='Card'
                  stripeElement={ CardElement }
                  variant='outlined'
                />
              </Grid>

              <Typography>Billing Address</Typography>
              <Grid item xs={ 12 }>
                <FormTextField label='Name' name='name' fullWidth />
              </Grid>
              <Grid item xs={ 12 }>
                <FormTextField
                  label='Address 1'
                  name='address.line1'
                  fullWidth
                />
              </Grid>
              <Grid item xs={ 12 }>
                <FormTextField
                  label='Address 2'
                  name='address.line2'
                  fullWidth
                />
              </Grid>
              <Grid item xs={ 12 }>
                <FormTextField label='City' name='address.city' fullWidth />
              </Grid>
              <Grid item xs={ 12 }>
                <FormTextField label='State' name='address.state' fullWidth />
              </Grid>

              <Grid item xs={ 12 }>
                <LoadingButton
                  type='submit'
                  disabled={ !stripe }
                  loading={ loading }
                >
                  Save Card
                </LoadingButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  )
}

export default AddPayment
