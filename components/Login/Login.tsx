import { Button } from '@material-ui/core'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import AuthScreen from 'components/common/AuthScreen'
import ButtonLink from 'components/common/ButtonLink'
import LoadingButton from 'components/common/LoadingButton'
import React, { SyntheticEvent, useState } from 'react'
import TextField from '@material-ui/core/TextField'

interface SignInResp {
  success: boolean;
  message: string;
}

interface Props {
  refresh: () => Promise<void>;
}

const Login = ({ refresh }: Props): JSX.Element => {
  const router = useRouter()
  const [fields, setFields] = useState({
    login: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (name: string): ((event: SyntheticEvent) => void) => (
    event: SyntheticEvent,
  ): void => {
    const target = event.target as HTMLTextAreaElement

    setFields({
      ...fields,
      [name]: target.value,
    })
  }

  const handleSubmit = (event: SyntheticEvent): void => {
    if (loading) return

    event.preventDefault()
    setLoading(true)

    fetch(`${process.env.API_URI}/users/sign_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: fields }),
    }).then(
      async(response): Promise<void> => {
        setLoading(false)

        const token = response.headers.get('Authorization')
        if (response.status === 201 && token) {
          localStorage.setItem('prospect-cards-token', token)
          await refresh()
          router.push('/')
        } else {
          toast.error(response.statusText)
        }
      },
    )
  }

  const { login, password } = fields

  return (
    <AuthScreen>
      <form noValidate autoComplete='off' onSubmit={ handleSubmit }>
        <TextField
          id='user-login'
          label='Email or Username'
          value={ login }
          onChange={ handleChange('login') }
          margin='normal'
          autoFocus
          fullWidth
        />
        <br />
        <TextField
          id='user-password'
          label='Password'
          type='password'
          value={ password }
          onChange={ handleChange('password') }
          margin='normal'
          fullWidth
        />
        <br />
        <LoadingButton
          loading={ loading }
          fullWidth
          variant='contained'
          color='primary'
          type='submit'
        >
          Sign In
        </LoadingButton>
      </form>
      <br />
      <Button
        fullWidth
        variant='outlined'
        href='/forgot-password'
        component={ ButtonLink }
      >
        Forgot Password?
      </Button>
    </AuthScreen>
  )
}

export default Login
