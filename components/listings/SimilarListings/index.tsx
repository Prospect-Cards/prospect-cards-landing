import { Maybe, useSimilarListingsQuery } from 'types/graphql'
import Dumb from './SimilarListings'
import React from 'react'
import Spinner from 'components/common/Spinner'

interface Props {
  listingId: number;
}
const SimilarListings = ({ listingId }: Props): Maybe<JSX.Element> => {
  const { data, loading, error } = useSimilarListingsQuery({
    variables: { id: listingId },
  })

  if (loading) return <Spinner />
  if (!data || error) return null

  return <Dumb data={ data } />
}

export default SimilarListings
