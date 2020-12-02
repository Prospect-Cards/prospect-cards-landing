import { useUserOffersQuery } from 'types/graphql'
import Dumb from './MyOffers'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const MyOffers = (): JSX.Element => {
  const { data, loading, error } = useUserOffersQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default MyOffers
