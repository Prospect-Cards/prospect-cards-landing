import { useListingQuery } from 'types/graphql'
import { useParams } from 'react-router-dom'
import Dumb from './Listing'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const Listing = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  // const [trackInterest] = useTrackInterestMutation({
  //   variables: { listingId: +id },
  // })

  const { data, loading, error } = useListingQuery({
    variables: { id: +id },
  })

  // useEffect(() => {
  //   trackInterest()
  // }, [trackInterest])

  if (loading) return <Spinner fullHeight />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default Listing
