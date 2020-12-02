import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import AuthScreen from 'components/common/AuthScreen'
import LoadingButton from 'components/common/LoadingButton'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'

interface SignInResp {
  success: boolean;
  message: string;
}

interface Props {
  refresh: () => Promise<void>;
}

const FormSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required')
    .min(6, 'Must be at least 6 characters'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Passwords must match',
  ),
})

const ResetPassword = ({ refresh }: Props): JSX.Element => {
  const router = useRouter()
  const { token } = router.query

  const initialValues = {
    password: '',
    password_confirmation: '',
    reset_password_token: token,
  }
  const [loading, setLoading] = useState(false)

  const handleSubmit = (variables: typeof initialValues): void => {
    if (loading) return

    setLoading(true)

    fetch(`${process.env.API_URI}/users/password.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: variables }),
    }).then(
      async(response): Promise<void> => {
        setLoading(false)

        const token = response.headers.get('Authorization')
        if (response.status === 204 && token) {
          localStorage.setItem('prospect-cards-token', token)
          await refresh()
          router.push('/')
        } else {
          toast.error(
            'Unable to reset password. This URL may be expired. Try requesting a new reset password link.',
          )
        }
      },
    )
  }

  return (
    <AuthScreen>
      <Formik
        initialValues={ initialValues }
        validationSchema={ FormSchema }
        onSubmit={ handleSubmit }
      >
        {({
          values: { password, password_confirmation },
          errors,
          touched,
          handleChange,
        }) => (
          <Form noValidate autoComplete='off'>
            <TextField
              name='password'
              label='Password'
              type='password'
              value={ password }
              onChange={ handleChange }
              margin='normal'
              fullWidth
            />
            {errors?.password && touched?.password ? (
              <div>{errors?.password}</div>
            ) : null}
            <br />
            <TextField
              name='password_confirmation'
              label='Password Confirmation'
              type='password'
              value={ password_confirmation }
              onChange={ handleChange }
              margin='normal'
              fullWidth
            />
            {errors?.password_confirmation && touched?.password_confirmation ? (
              <div>{errors?.password_confirmation}</div>
            ) : null}
            <br />
            <LoadingButton
              loading={ loading }
              fullWidth
              variant='contained'
              color='primary'
              type='submit'
            >
              Reset Password
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </AuthScreen>
  )
}

export default ResetPassword
