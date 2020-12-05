import {
  useJoinMailingListMutation,
} from 'types/graphql'
import Dumb from './EmailForm'
import React from 'react'

const EmailForm = (): JSX.Element => {
  const [joinMailingList, { loading }] = useJoinMailingListMutation()

  return <Dumb loading={ loading } submit={ joinMailingList } />
}

export default EmailForm
