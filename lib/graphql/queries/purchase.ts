import gql from 'graphql-tag'

gql`
  query purchases {
    viewer {
      id
      purchases {
        id
        createdAt
        offer {
          id
          price
        }
        listing {
          id
          title
          seller {
            id
            username
          }
          images {
            ...listingImage
          }
        }
      }
    }
  }
`

gql`
  query purchase($token: String!) {
    purchase(token: $token) {
      id
      review {
        id
        speed
        communication
        accuracy
      }
    }
  }
`
