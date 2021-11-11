import gql from 'graphql-tag'

gql`
  mutation joinMailingList($email: String!, $promotion: String) {
    joinMailingList(email: $email, promotion: $promotion) {
      success
      message
    }
  }
`
