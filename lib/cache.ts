import { InMemoryCache } from '@apollo/client'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        listing(_, { args, toReference }) {
          return toReference({
            __typename: 'Listing',
            id: args?.id,
          })
        },
      },
    },
  },
})
