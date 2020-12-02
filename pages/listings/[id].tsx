import { GetServerSideProps } from 'next'
import { ListingDocument } from 'types/graphql'
import { addApolloState, initializeApollo } from 'lib/apollo'
import Listing from 'components/listings/Listing'

export const getServerSideProps: GetServerSideProps = async({
  params: { id },
}) => {
  const apolloClient = initializeApollo()

  const res = await apolloClient.query({
    query: ListingDocument,
    variables: { id: +id },
  })

  return addApolloState(apolloClient, {
    props: {
      data: res.data,
    },
  })
}

export default Listing
