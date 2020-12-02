import { RouteComponentProps } from 'react-router'
import { toast } from 'react-toastify'
import AuthScreen from 'components/common/AuthScreen'
import LoadingButton from 'components/common/LoadingButton'
import React, { SyntheticEvent, useState } from 'react'
import TextField from '@material-ui/core/TextField'

interface SignInResp {
  success: boolean;
  message: string;
}

interface Props extends RouteComponentProps {
  refresh: () => Promise<void>;
}

const Register = ({ history, location, refresh }: Props): JSX.Element => {
  const [fields, setFields] = useState({
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
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

    fetch(`${process.env.apiUri}/users.json`, {
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const referrer = location.state && location.state.from
          history.push(referrer || '/')
        } else {
          toast.error(response.statusText)
        }
      },
    )
  }

  const { email, username, password, password_confirmation } = fields

  return (
    <AuthScreen>
      <form noValidate autoComplete='off' onSubmit={ handleSubmit }>
        <TextField
          id='user-email'
          label='Email'
          value={ email }
          onChange={ handleChange('email') }
          margin='normal'
          autoFocus
          fullWidth
        />
        <br />
        <TextField
          id='user-username'
          label='Username'
          value={ username }
          onChange={ handleChange('username') }
          margin='normal'
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
        <TextField
          id='user-password-confirmation'
          label='Password Confirmation'
          type='password'
          value={ password_confirmation }
          onChange={ handleChange('password_confirmation') }
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
          Join
        </LoadingButton>
      </form>
    </AuthScreen>
  )
}

export default Register
