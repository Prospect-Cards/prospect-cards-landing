import { MenuItem, Typography } from '@material-ui/core'
import { NoticeFragment } from 'types/graphql'
import { useRouter } from 'next/router'

import React from 'react'

interface Props {
  notice: NoticeFragment;
  onClose: VoidFunction;
}

const NoticeMenuItem = ({
  notice: { title, text, path },
  onClose,
}: Props): JSX.Element => {
  const router = useRouter()

  const noticeBody = (
    <div style={ { display: 'block' } }>
      <Typography variant='body1'>{title}</Typography>
      <Typography variant='caption'>{text}</Typography>
    </div>
  )
  const handleClose = () => {
    onClose()
    path && router.push(path)
  }

  return <MenuItem onClick={ handleClose }>{noticeBody}</MenuItem>
}

export default NoticeMenuItem
