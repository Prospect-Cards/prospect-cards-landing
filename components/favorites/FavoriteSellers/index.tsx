import { useFavoriteSellersQuery } from 'types/graphql'
import Dumb from './FavoriteSellers'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const FavoriteSellers = (): JSX.Element => {
  const { data, loading, error } = useFavoriteSellersQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default FavoriteSellers
