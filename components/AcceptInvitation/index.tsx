import {
  Maybe,
  useInvitedViewerQuery,
  useMaybeViewerQuery,
} from 'types/graphql'
import { useRouter } from 'next/router'
import AcceptInvitationComponent from './AcceptInvitation'
import ErrorMessage from '../common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const AcceptInvitation = (): Maybe<JSX.Element> => {
  const router = useRouter()
  const { token } = router.query
  let tokenValue
  if (typeof token === 'string') {
    tokenValue = token
  } else {
    tokenValue = token[0]
  }

  const { refetch } = useMaybeViewerQuery()
  const { data, loading, error } = useInvitedViewerQuery({
    variables: { token: tokenValue },
  })

  if (loading) return <Spinner fullHeight />
  if (!data || error) return <ErrorMessage message={ error?.message } />
  if (!data.invitedViewer)
    return (
      <ErrorMessage message='Unable to find the user this invitation belongs to. Did you already accept the invitation?' />
    )

  const refresh = async(): Promise<void> => {
    await refetch()
  }

  return (
    <AcceptInvitationComponent token={ tokenValue } refresh={ refresh } />
  )
}

export default AcceptInvitation
