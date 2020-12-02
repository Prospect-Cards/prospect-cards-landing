import { Button, Typography } from '@material-ui/core'
import ButtonLink  from 'components/common/ButtonLink'
import React from 'react'

interface Props {
  message?: string;
}

const ConfirmEmail = ({ message }: Props): JSX.Element => {
  return (
    <>
      <Typography>{message}</Typography>
      <Button component={ ButtonLink } href='/'>
        Home
      </Button>
    </>
  )
}

export default ConfirmEmail
