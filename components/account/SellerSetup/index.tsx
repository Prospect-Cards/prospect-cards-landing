import { useStripeAccountQuery } from 'types/graphql'
import Dumb from './SellerSetup'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const SellerSetup = (): JSX.Element => {
  const { data, loading, error } = useStripeAccountQuery({
    fetchPolicy: 'network-only',
  })

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage message={ error?.message } />

  return <Dumb data={ data } />
}

export default SellerSetup
