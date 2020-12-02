import { NoticeFragment, useMarkNoticesReadMutation } from 'types/graphql'
import Dumb from './NoticesMenu'
import React from 'react'

interface Props {
  notices?: NoticeFragment[];
}

const NoticesMenu = (props: Props): JSX.Element => {
  const [markRead] = useMarkNoticesReadMutation()

  return <Dumb markRead={ markRead } { ...props } />
}

export default NoticesMenu
