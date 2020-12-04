import gql from 'graphql-tag'

gql`
  query appData {
    maybeViewer {
      id
      admin
    }
    playerTags: tags(context: player, minimum: 1) {
      id
      name
    }
    categoryTags: tags(context: category, minimum: 1) {
      id
      name
    }
    productTags: tags(context: product_type, minimum: 1) {
      id
      name
    }
    setTags: tags(context: set_type, minimum: 1) {
      id
      name
    }
    manufacturerTags: tags(context: manufacturer, minimum: 1) {
      id
      name
    }
    graderTags: tags(context: grader, minimum: 1) {
      id
      name
    }
    parallelTags: tags(context: parallel, minimum: 1) {
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
