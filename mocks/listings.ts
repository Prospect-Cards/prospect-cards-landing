import {
  UserListingsDocument,
  UserListingsQuery,
  UserListingsQueryVariables,
} from 'types/graphql'
import { mockRequest } from 'mocks/index'

export const listingFragment = {
  id: 1,
  __typename: 'Listing',
}

export const userListingsMock = mockRequest<
UserListingsQuery,
UserListingsQueryVariables
>(UserListingsDocument, {
  viewer: {
    id: 1,
    __typename: 'User',
    availableListings: [],
    soldListings: [],
  },
})
