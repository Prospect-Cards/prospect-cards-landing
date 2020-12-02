import { Maybe, useMaybeViewerQuery } from 'types/graphql'
import { Redirect, RouteComponentProps, withRouter } from 'react-router'
import React from 'react'
import RegisterComponent from './Register'

const Register = (props: RouteComponentProps): Maybe<JSX.Element> => {
  const { data, loading, refetch } = useMaybeViewerQuery()

  if (loading) return null
  if (data && data.maybeViewer) return <Redirect to='/' />

  const refresh = async(): Promise<void> => {
    await refetch()
  }

  return <RegisterComponent { ...props } refresh={ refresh } />
}

export default withRouter(Register)
