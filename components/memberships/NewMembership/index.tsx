import { useProductsQuery } from 'types/graphql'
import Dumb from './NewMembership'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const NewMembership = (): JSX.Element => {
  const { data, loading, error } = useProductsQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default NewMembership
