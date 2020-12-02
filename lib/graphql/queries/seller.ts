import gql from 'graphql-tag'

gql`
  query seller($username: String!) {
    seller(username: $username) {
      id
      username
      profilePictureUrl
      isFavorited
    }
  }
`

gql`
  query favoriteSellers {
    viewer {
      favoriteSellers {
        id
        createdAt
        username
        profilePictureUrl
        isFavorited
      }
    }
  }
`
