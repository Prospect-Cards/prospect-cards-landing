import {
  FavoriteListingsDocument,
  useToggleFavoriteListingMutation,
} from 'types/graphql'
import Dumb from 'components/favorites/FavoriteToggle'
import React from 'react'

interface Props {
  listingId: number;
  isFavorited: boolean;
  button?: boolean;
}
const FavoriteListingToggle = ({
  listingId,
  isFavorited,
  button,
}: Props): JSX.Element => {
  const [toggle, { loading }] = useToggleFavoriteListingMutation({
    variables: { listingId, isFavorited: !isFavorited },
    optimisticResponse: {
      __typename: 'Mutation',
      toggleFavoriteListing: {
        __typename: 'ToggleFavoriteListingPayload',
        listing: {
          id: listingId,
          __typename: 'Listing',
          isFavorited: !isFavorited,
        },
      },
    },
    refetchQueries: [{ query: FavoriteListingsDocument }],
    awaitRefetchQueries: button,
  })

  const handleClick = () => {
    toggle()
  }
  return (
    <Dumb
      handleClick={ handleClick }
      isFavorited={ isFavorited }
      button={ button }
      loading={ loading }
    />
  )
}

export default FavoriteListingToggle
