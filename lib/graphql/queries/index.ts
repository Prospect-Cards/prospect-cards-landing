import gql from 'graphql-tag'

gql`
  query appData {
    maybeViewer {
      id
      admin
    }
    playerTags: tags(context: player) {
      id
      name
    }
    categoryTags: tags(context: category) {
      id
      name
    }
    productTags: tags(context: product_type) {
      id
      name
    }
    setTags: tags(context: set_type) {
      id
      name
    }
    manufacturerTags: tags(context: manufacturer) {
      id
      name
    }
    graderTags: tags(context: grader) {
      id
      name
    }
    parallelTags: tags(context: parallel) {
      id
      name
    }
  }
`
gql`
  query maybeViewer {
    maybeViewer {
      id
      admin
    }
  }
`

gql`
  query invitedViewer($token: String!) {
    invitedViewer(token: $token) {
      id
      email
    }
  }
`

gql`
  query products {
    viewer {
      id
      availableMemberships {
        token
        price
        term
      }
    }
  }
`
