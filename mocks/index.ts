import { DocumentNode } from '@apollo/client'
import { MockedResponse } from '@apollo/client/testing'

export type MockedRequest = (callback?: () => void) => MockedResponse;

export function mockRequest<Query, Variables = Record<string, unknown>>(
  document: DocumentNode,
  data: Query,
  variables?: Variables,
): MockedRequest {
  return (callback): MockedResponse => ({
    request: {
      query: document,
      variables: variables || {},
    },
    result: (): { data: Query } => {
      callback && callback()

      return {
        data,
      }
    },
  })
}
