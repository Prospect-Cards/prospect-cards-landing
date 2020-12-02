import { useListingsQuery } from 'types/graphql'
import Dumb from './SearchResults'
import ErrorMessage from 'components/common/ErrorMessage'
import ListingSkeletons from 'components/common/ListingSkeleton'
import React from 'react'

interface Props {
  listingIds: number[];
}
const SearchResults = ({ listingIds }: Props): JSX.Element => {
  const { data, loading, error } = useListingsQuery({
    variables: { listingIds },
    fetchPolicy: 'network-only',
  })

  if (loading && !data) return <ListingSkeletons />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } loading={ loading } />
}

export default SearchResults
