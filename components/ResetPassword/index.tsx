import { Maybe, useMaybeViewerQuery } from 'types/graphql'
import { useRouter } from 'next/router'
import React from 'react'
import ResetPasswordComponent from './ResetPassword'

const ResetPassword = (): Maybe<JSX.Element> => {
  const router = useRouter()
  const { data, loading, refetch } = useMaybeViewerQuery()

  if (loading) return null
  if (data && data.maybeViewer) {
    router.push('/')
    return
  }

  const refresh = async(): Promise<void> => {
    await refetch()
  }

  return <ResetPasswordComponent refresh={ refresh } />
}

export default ResetPassword
