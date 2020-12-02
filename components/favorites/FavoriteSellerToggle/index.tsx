import {
  FavoriteListingsDocument,
  useToggleFavoriteSellerMutation,
} from 'types/graphql'
import Dumb from 'components/favorites/FavoriteToggle'
import React from 'react'

interface Props {
  sellerId: number;
  isFavorited: boolean;
  button?: boolean;
}
const FavoriteSellerToggle = ({
  sellerId,
  isFavorited,
  button,
}: Props): JSX.Element => {
  const [toggle, { loading }] = useToggleFavoriteSellerMutation({
    variables: { sellerId, isFavorited: !isFavorited },
    optimisticResponse: {
      __typename: 'Mutation',
      toggleFavoriteSeller: {
        __typename: 'ToggleFavoriteSellerPayload',
        seller: {
          id: sellerId,
          __typename: 'Seller',
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

export default FavoriteSellerToggle
