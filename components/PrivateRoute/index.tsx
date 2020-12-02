import { Maybe, useMaybeViewerQuery } from 'types/graphql'
import PrivateRouteComponent from './PrivateRoute'
import React from 'react'

interface Props {
  children: JSX.Element
}
const PrivateRoute = (props: Props): Maybe<JSX.Element> => {
  const { data, loading, client, error } = useMaybeViewerQuery()

  if (loading || typeof window === 'undefined') return null

  if (error) {
    // Prevent any chance of store leaking into unauthorized space.
    // Also prevents weird loop of expired creds being stored, preventing login.
    client.resetStore()
    window.location.href = '/'
  }

  return (
    <PrivateRouteComponent
      { ...props }
      isAuthenticated={ !!(data && data.maybeViewer) }
    />
  )
}

export default PrivateRoute
