import { useListingQuery } from 'types/graphql'
import { useRouter } from 'next/router'
import Dumb from './Listing'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'

const Listing = (): JSX.Element => {
  const router = useRouter()
  const { id } = router.query

  const { data, error } = useListingQuery({
    variables: { id: +id },
    fetchPolicy: 'cache-only',
  })

  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default Listing
