import { Maybe, useMaybeViewerQuery } from 'types/graphql'
import { useRouter } from 'next/router'
import React from 'react'
import RegisterComponent from './Register'

const Register = (): Maybe<JSX.Element> => {
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

  return <RegisterComponent refresh={ refresh } />
}

export default Register
