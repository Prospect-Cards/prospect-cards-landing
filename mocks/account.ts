import {
  AddPaymentDocument,
  AddPaymentQuery,
  AddPaymentQueryVariables,
  MaybeViewerDocument,
  MaybeViewerQuery,
  MaybeViewerQueryVariables,
  SyncPaymentDocument,
  SyncPaymentMutation,
  SyncPaymentMutationVariables,
} from 'types/graphql'
import { MockedRequest, mockRequest } from 'mocks/index'

const paymentMethodFragment = {
  id: 1,
  brand: 'visa',
  expMonth: 12,
  expYear: 24,
  last4: '5443',
}

export const addPaymentQueryMock = mockRequest<
AddPaymentQuery,
AddPaymentQueryVariables
>(AddPaymentDocument, {
  viewer: {
    id: 1,
    __typename: 'User',
    paymentMethod: paymentMethodFragment,
  },
  stripeSetupIntentId: 'si_123',
})

export const syncPaymentMutationMock = mockRequest<
SyncPaymentMutation,
SyncPaymentMutationVariables
>(SyncPaymentDocument, {
  syncPayment: {
    __typename: 'SyncPaymentPayload',
    message: 'Success',
    viewer: {
      id: 1,
      __typename: 'User',
      paymentMethod: paymentMethodFragment,
    },
  },
})

export const maybeViewerQueryMock = (overrides = {}): MockedRequest =>
  mockRequest<MaybeViewerQuery, MaybeViewerQueryVariables>(
    MaybeViewerDocument,
    {
      maybeViewer: {
        id: 1,
        admin: false,
      },
      ...overrides,
    },
  )
