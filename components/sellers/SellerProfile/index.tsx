import { useParams } from 'react-router-dom'
import { useSellerQuery } from 'types/graphql'
import Dumb from './SellerProfile'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const SellerProfile = (): JSX.Element => {
  const { username } = useParams<{ username: string }>()

  const { data, loading, error } = useSellerQuery({ variables: { username } })

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default SellerProfile
