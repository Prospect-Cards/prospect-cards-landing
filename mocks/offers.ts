import {
  AcceptOfferDocument,
  AcceptOfferMutation,
  AcceptOfferMutationVariables,
} from 'types/graphql'
import { mockRequest } from 'mocks/index'

export const offerFragment = {
  id: 1,
  __typename: 'Offer',
}

export const acceptOfferMutationMock = mockRequest<
AcceptOfferMutation,
AcceptOfferMutationVariables
>(
  AcceptOfferDocument,
  {
    acceptOffer: {
      __typename: 'AcceptOfferPayload',
      message: 'Success',
    },
  },
  { offerId: offerFragment.id },
)
