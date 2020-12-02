import gql from 'graphql-tag'

gql`
  mutation saveReview($review: ReviewInput!) {
    saveReview(review: $review) {
      purchase {
        id
        review {
          ...review
        }
      }
      message
    }
  }
`
