import { useUserListingsQuery } from 'types/graphql'
import Dumb from './AccountListings'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const AccountListings = (): JSX.Element => {
  const { data, loading, error } = useUserListingsQuery()

  if (loading) return <Spinner fullHeight />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default AccountListings
