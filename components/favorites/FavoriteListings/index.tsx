import { useFavoriteListingsQuery } from 'types/graphql'
import Dumb from './FavoriteListings'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const FavoriteListings = (): JSX.Element => {
  const { data, loading, error } = useFavoriteListingsQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default FavoriteListings
