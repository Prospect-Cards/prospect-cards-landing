import { Button, Typography } from '@material-ui/core'
import Link  from 'components/common/Link'
import React from 'react'

interface Props {
  message?: string;
}

const ConfirmEmail = ({ message }: Props): JSX.Element => {
  return (
    <>
      <Typography>{message}</Typography>
      <Button component={ Link } href='/'>
        Home
      </Button>
    </>
  )
}

export default ConfirmEmail
