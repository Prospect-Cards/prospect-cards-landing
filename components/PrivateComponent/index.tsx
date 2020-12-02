import { Maybe, useMaybeViewerQuery } from 'types/graphql'
import React from 'react'

interface Props {
  children: JSX.Element | string;
  loggedOut?: JSX.Element;
}

const PrivateComponent = ({
  children,
  loggedOut,
}: Props): Maybe<JSX.Element> => {
  const { data } = useMaybeViewerQuery()

  if (!data?.maybeViewer) {
    return loggedOut || null
  }

  return <>{children}</>
}

export default PrivateComponent
