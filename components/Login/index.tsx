import { Maybe, useMaybeViewerQuery } from 'types/graphql'
import { useRouter } from 'next/router'
import LoginComponent from './Login'
import React from 'react'

const Login = (): Maybe<JSX.Element> => {
  const router = useRouter()
  const { data, loading, refetch } = useMaybeViewerQuery()

  if (loading) return null
  if (data && data.maybeViewer) {
    router.push('/')
    return null
  }

  const refresh = async(): Promise<void> => {
    await refetch()
  }

  return <LoginComponent refresh={ refresh } />
}

export default Login
