import { AppProps } from 'next/app'
import { Maybe, useMaybeViewerQuery } from 'types/graphql'
import PrivateRouteComponent from './PrivateRoute'
import React from 'react'

const PrivateRoute = ({ pageProps }: AppProps): Maybe<JSX.Element> => {
  const { data, loading, client, error } = useMaybeViewerQuery()

  if (loading) return null

  if (error) {
    // Prevent any chance of store leaking into unauthorized space.
    // Also prevents weird loop of expired creds being stored, preventing login.
    client.resetStore()
    if (typeof window === 'undefined') return

    window.location.href = '/'
  }

  return (
    <PrivateRouteComponent
      { ...pageProps }
      isAuthenticated={ !!(data && data.maybeViewer) }
    />
  )
}

export default PrivateRoute
