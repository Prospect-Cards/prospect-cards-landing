import { GetServerSideProps } from 'next'
import { ListingDocument, useListingQuery } from 'types/graphql'
import { addApolloState, initializeApollo } from 'lib/apollo'
import { useRouter } from 'next/router'
import Dumb from './Listing'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const Listing = (): JSX.Element => {
  const router = useRouter()
  const { id } = router.query
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

export const getServerSideProps: GetServerSideProps = async({ params: { id } }) => {
  console.log('getting server side props')
  const apolloClient = initializeApollo()
  debugger

  await apolloClient.query({
    query: ListingDocument,
    variables: { id: +id },
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}

export default Listing
