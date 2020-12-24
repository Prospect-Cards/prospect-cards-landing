import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import {
  JoinMailingListMutationFn,
  JoinMailingListMutationVariables,
} from 'types/graphql'
import { Mixpanel } from 'lib/mixpanel'
import FormTextField from 'components/common/formFields/FormTextField'
import LoadingButton from 'components/common/LoadingButton'
import React from 'react'
import useStyles from './styles'

interface Props {
  loading: boolean;
  submit: JoinMailingListMutationFn;
}

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email address please'),
})

const initialValues: JoinMailingListMutationVariables = {
  email: '',
}
const EmailForm = ({ loading, submit }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={ classes.root }>
      <Formik<JoinMailingListMutationVariables>
        initialValues={ initialValues }
        validationSchema={ FormSchema }
        validateOnChange={ false }
        validateOnBlur={ false }
        onSubmit={ async(variables, { resetForm }) => {
          submit({ variables }).then((res) => {
            if (res.data.joinMailingList.success) {
              resetForm()
              Mixpanel.track('Joined Mailing List', { email: variables.email })
              Mixpanel.people.set({ $email: variables.email })
            }
          })
        } }
      >
        {() => {
          return (
            <Form>
              <FormTextField
                placeholder='Enter Email Address'
                variant='standard'
                name='email'
                fullWidth
                InputProps={ {
                  className: classes.input,
                  endAdornment: (
                    <LoadingButton
                      variant='contained'
                      type='submit'
                      className={ classes.submitBtn }
                      loading={ loading }
                    >
                      Submit
                    </LoadingButton>
                  ),
                } }
              />
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default EmailForm
