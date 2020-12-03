import { Maybe, useMaybeViewerQuery } from 'types/graphql'
import { useRouter } from 'next/router'
import PrivateRouteComponent from './PrivateRoute'
import React from 'react'

interface Props {
  children: JSX.Element;
}
const PrivateRoute = (props: Props): Maybe<JSX.Element> => {
  const { data, loading, client, error } = useMaybeViewerQuery()
  const router = useRouter()

  if (loading || typeof window === 'undefined') return null

  if (error) {
    // Prevent any chance of store leaking into unauthorized space.
    // Also prevents weird loop of expired creds being stored, preventing login.
    client.resetStore()
    router.push('/')
    return null
  }

  return (
    <PrivateRouteComponent
      { ...props }
      isAuthenticated={ !!(data && data.maybeViewer) }
    />
  )
}

export default PrivateRoute
