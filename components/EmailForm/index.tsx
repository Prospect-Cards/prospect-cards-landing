import { useJoinMailingListMutation } from 'types/graphql'
import Dumb from './EmailForm'
import React from 'react'

interface Props {
  promotion?: string;
}

const EmailForm = ({ promotion }: Props): JSX.Element => {
  const [joinMailingList, { loading }] = useJoinMailingListMutation()

  return (
    <Dumb loading={ loading } submit={ joinMailingList } promotion={ promotion } />
  )
}

export default EmailForm
