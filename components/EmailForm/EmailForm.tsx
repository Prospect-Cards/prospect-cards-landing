import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import {
  JoinMailingListMutationFn,
  JoinMailingListMutationVariables,
} from 'types/graphql'
import FormTextField from 'components/common/formFields/FormTextField'
import LoadingButton from 'components/common/LoadingButton'
import React from 'react'
import useStyles from './styles'

interface Props {
  loading: boolean;
  submit: JoinMailingListMutationFn;
}

const FormSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required('Required'),
})

const initialValues: JoinMailingListMutationVariables = {
  email: '',
}
const EmailForm = ({ loading, submit }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <div>
      <Formik<JoinMailingListMutationVariables>
        initialValues={ initialValues }
        validationSchema={ FormSchema }
        onSubmit={ async(variables, { resetForm }) => {
          submit({ variables }).then((res) => {
            if (res.data.joinMailingList.success) {
              resetForm()
            }
          })
        } }
      >
        {() => {
          return (
            <Form>
              <FormTextField
                className={ classes.container }
                placeholder='Enter Email Address'
                variant='standard'
                name='email'
                InputProps={ {
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
