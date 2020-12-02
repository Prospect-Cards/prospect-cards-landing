import { Maybe, useConfirmedQuery } from 'types/graphql'
import Dumb from './ConfirmEmailDialog'
import React from 'react'

const ConfirmEmailDialog = (): Maybe<JSX.Element> => {
  const { data, refetch, loading } = useConfirmedQuery({
    notifyOnNetworkStatusChange: true,
  })

  const retry = () => {
    refetch()
  }

  return (
    <Dumb
      open={ Boolean(data && !data.viewer.confirmed) }
      retry={ retry }
      loading={ loading }
    />
  )
}

export default ConfirmEmailDialog
