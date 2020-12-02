import { Maybe, useMaybeViewerQuery } from 'types/graphql'
import { Redirect, RouteComponentProps, withRouter } from 'react-router'
import LoginComponent from './Login'
import React from 'react'

const Login = (props: RouteComponentProps): Maybe<JSX.Element> => {
  const { data, loading, refetch } = useMaybeViewerQuery()

  if (loading) return null
  if (data && data.maybeViewer) return <Redirect to='/' />

  const refresh = async(): Promise<void> => {
    await refetch()
  }

  return <LoginComponent { ...props } refresh={ refresh } />
}

export default withRouter(Login)
