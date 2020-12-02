import { Maybe, useMaybeViewerQuery } from 'types/graphql'
import React from 'react'

interface Props {
  children: JSX.Element | string;
}

const AdminComponent = ({ children }: Props): Maybe<JSX.Element> => {
  const { data } = useMaybeViewerQuery()

  if (!data?.maybeViewer?.admin) {
    return null
  }

  return <>{children}</>
}

export default AdminComponent
