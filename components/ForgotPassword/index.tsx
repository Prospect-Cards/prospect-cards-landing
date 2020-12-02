import {
  ForgotPasswordMutationVariables,
  useForgotPasswordMutation,
} from 'types/graphql'
import { useRouter } from 'next/router'
import Dumb from './ForgotPassword'
import React from 'react'

const ForgotPassword = (): JSX.Element => {
  const router = useRouter()

  const [forgetPassword, { loading }] = useForgotPasswordMutation()

  const handleSubmit = (variables: ForgotPasswordMutationVariables): void => {
    forgetPassword({ variables }).then(({ data }) => {
      if (data?.forgotPassword?.message) {
        router.push('/login')
      }
    })
  }
  return <Dumb handleSubmit={ handleSubmit } loading={ loading } />
}

export default ForgotPassword
