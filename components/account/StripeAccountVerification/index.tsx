import { useStripeAccountQuery } from 'types/graphql'
import Dumb from './StripeAccountVerification'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const StripeAccountVerification = (): JSX.Element => {
  const { data, loading, error } = useStripeAccountQuery({
    variables: { refresh: true },
  })

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default StripeAccountVerification
