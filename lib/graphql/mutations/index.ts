import gql from 'graphql-tag'

gql`
  mutation joinMailingList($email: String!) {
    joinMailingList(email: $email) {
      success
      message
    }
  }
`
