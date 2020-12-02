import {
  ApolloClient,
  ApolloLink,
  FetchResult,
  ServerError,
  from,
} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import cache from './cache'
import merge from 'deepmerge'

import { AppProps } from 'next/app'
import { toast } from 'react-toastify'
import { useMemo } from 'react'
type ServerErrorOrUndef = ServerError | undefined;

const isSsr = typeof window === 'undefined'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'
const uri = `${process.env.apiUri}/v1`
let apolloClient

const httpLink = createUploadLink({
  uri,
  credentials: 'include',
})

const showFeedback = new ApolloLink((operation, forward) => {
  if (!forward) return null

  return forward(operation).map(
    (response: FetchResult): FetchResult => {
      // uncomment for debugging responses
      // console.log(response)

      // if a successful mutation has a success message, display it
      if (
        response.data &&
        response.data[operation.operationName] &&
        response.data[operation.operationName].message
      ) {
        toast.success(response.data[operation.operationName].message, {
          autoClose: 4000,
        })
      }

      return response
    },
  )
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = isSsr ?
    undefined :
    localStorage.getItem('prospect-cards-token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  }
})

const shouldRedirectToLogin = (serverError: ServerErrorOrUndef) => {
  if (isSsr) return false

  const path = window.location.pathname

  return (
    serverError &&
    serverError.statusCode === 401 &&
    !['/login', '/register'].includes(path)
  )
}
const handleError = onError(({ graphQLErrors, networkError, response }) => {
  const serverError: ServerErrorOrUndef = networkError as ServerErrorOrUndef

  if (graphQLErrors && response) {
    const errors = graphQLErrors.map((e): string => e.message)
    errors.forEach((error): number | string => toast.error(error))
    response.errors = undefined
  } else if (shouldRedirectToLogin(serverError)) {
    initializeApollo().clearStore()
    isSsr || (window.location.pathname = '/login')
  }
})

const link = from([
  handleError,
  showFeedback,
  // https://github.com/jaydenseric/apollo-upload-client/issues/213
  authLink.concat((httpLink as unknown) as ApolloLink),
])

const createApolloClient = () => {
  return new ApolloClient({
    cache: cache,
    link,
    ssrMode: typeof window === 'undefined',
  })
}

export function initializeApollo(initialState = null): ApolloClient<any> {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache)

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(
  client: ApolloClient<any>,
  pageProps: AppProps['pageProps'],
): AppProps['pageProps'] {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps: AppProps['pageProps']): ApolloClient<any> {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}
