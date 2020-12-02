import {
  ForgotPasswordMutationVariables,
  useForgotPasswordMutation,
} from 'types/graphql'
import { useHistory } from 'react-router-dom'
import Dumb from './ForgotPassword'
import React from 'react'

const ForgotPassword = (): JSX.Element => {
  const history = useHistory()

  const [forgetPassword, { loading }] = useForgotPasswordMutation()

  const handleSubmit = (variables: ForgotPasswordMutationVariables): void => {
    forgetPassword({ variables }).then(({ data }) => {
      if (data?.forgotPassword?.message) {
        history.push('/login')
      }
    })
  }
  return <Dumb handleSubmit={ handleSubmit } loading={ loading } />
}

export default ForgotPassword
