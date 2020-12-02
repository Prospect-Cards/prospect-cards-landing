import gql from 'graphql-tag'

gql`
  fragment user on User {
    id
    email
    profilePictureUrl
    ...address
  }
`

gql`
  fragment address on User {
    id
    street1
    street2
    city
    state
    zip
  }
`

gql`
  fragment listing on Listing {
    id
    title
    createdAt
    description
    price
    status
    player
    isFavorited
    ownedByUser
    seller {
      id
      username
    }
    images {
      ...listingImage
    }
    offers {
      id
      price
    }
  }
`

gql`
  fragment listingImage on ListingImage {
    id
    url
  }
`
gql`
  fragment offer on Offer {
    id
    price
    listing {
      id
      title
      images {
        ...listingImage
      }
    }
  }
`

gql`
  fragment emailPreference on EmailPreference {
    id
    category
    subscribed
  }
`

gql`
  fragment notice on Notice {
    id
    title
    text
    path
  }
`

gql`
  fragment paymentMethod on StripePaymentMethod {
    id
    brand
    last4
    expMonth
    expYear
  }
`

gql`
  fragment review on Review {
    id
    speed
    accuracy
    communication
  }
`
