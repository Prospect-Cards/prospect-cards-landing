import { gql } from '@apollo/client'

gql`
  mutation toggleFavoriteSeller($sellerId: Int!, $isFavorited: Boolean!) {
    toggleFavoriteSeller(sellerId: $sellerId, isFavorited: $isFavorited) {
      seller {
        id
        isFavorited
      }
    }
  }
`
