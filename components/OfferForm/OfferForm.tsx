import * as Yup from 'yup'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import {
  ConfirmOfferMutationFn,
  SaveOfferMutationVariables,
} from 'types/graphql'
import { Form, Formik } from 'formik'
import { centsToDollars } from 'lib/money'
import { toast } from 'react-toastify'
import { useStripe } from '@stripe/react-stripe-js'
import DollarInput from 'components/common/formFields/DollarInput'
import LoadingButton from 'components/common/LoadingButton'
import React, { useState } from 'react'

interface Props {
  listingId: number;
  buyNow?: boolean;
  onSubmit: (variables: SaveOfferMutationVariables) => void;
  price: number;
  loading: boolean;
  open: boolean;
  handleClose: VoidFunction;
  confirmOffer: ConfirmOfferMutationFn;
  clientSecret?: string;
  offerId?: number;
}

const InputSchema = (price: number) =>
  Yup.object().shape({
    offer: Yup.object().shape({
      price: Yup.number()
        .min(5, 'Must be at least $5')
        .max(
          price,
          'No offers above asking price. Offering the asking price is the same as "Buy Now".',
        ),
    }),
  })

const title = (buyNow?: boolean): string => (buyNow ? 'Buy Now' : 'Make Offer')
const message = (price: number, buyNow?: boolean): JSX.Element => {
  return buyNow ? (
    <>
      You will be charged {`${centsToDollars(price)}`}.
      <br />
      As a "Buy Now" offer, it will be automatically accepted by the user.
    </>
  ) : (
    <>
      By agreeing, you authorize us to charge you at a later time upon the
      seller accepting your offer.
      <br />
      Your offer is valid for 24 hours. The seller can reject your offer, make a
      counter-offer, or accept it as is.
      <br />
      You can make 5 offers on this listing in total.
    </>
  )
}
const successMessage = (buyNow?: boolean) => {
  return buyNow ? 'Purchased. Congratulations!' : 'Offer submitted. Good luck!'
}

const OfferForm = ({
  listingId,
  buyNow,
  onSubmit,
  price,
  loading,
  open,
  handleClose,
  confirmOffer,
  clientSecret,
  offerId,
}: Props): JSX.Element => {
  const stripe = useStripe()
  const [loadingAgreed, setLoadingAgreed] = useState(false)

  const onAgree = () => {
    if (!clientSecret || !offerId || !stripe) {
      return
    }

    setLoadingAgreed(true)
    stripe.confirmCardPayment(clientSecret).then(
      async({ error }): Promise<void> => {
        if (error) {
          toast.error(error.message)
        } else {
          await confirmOffer({ variables: { offerId } })
          toast.success(successMessage(buyNow))
          handleClose()
        }
        setLoadingAgreed(false)
      },
    )
  }

  return (
    <>
      <Formik
        initialValues={ { offer: { listingId, price: price / 100 } } }
        validationSchema={ InputSchema(price / 100) }
        onSubmit={ onSubmit }
      >
        {({ values }) => {
          return (
            <Form>
              <DollarInput
                name='offer.price'
                value={ values.offer.price }
                textFieldProps={ { label: 'Amount' } }
                style={ buyNow ? { display: 'none' } : {} }
              />
              <LoadingButton loading={ loading } type='submit'>
                {title(buyNow)}
              </LoadingButton>
            </Form>
          )
        }}
      </Formik>
      <Dialog
        onClose={ handleClose }
        aria-labelledby='offer-dialog-title'
        open={ open }
      >
        <DialogTitle id='offer-dialog-title'>{`${title(buyNow)}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id='offer-dialog-description'>
            {message(price, buyNow)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose } color='secondary'>
            Nevermind
          </Button>
          <LoadingButton
            variant='outlined'
            color='primary'
            loading={ loadingAgreed }
            disabled={ !stripe || !clientSecret }
            onClick={ onAgree }
          >
            {title(buyNow)}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default OfferForm
