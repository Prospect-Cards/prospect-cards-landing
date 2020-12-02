import { Button } from '@material-ui/core'
import React from 'react'

interface Props {
  onClick: VoidFunction;
}

const LogoutButton = ({ onClick }: Props): JSX.Element => {
  return (
    <Button variant='outlined' color='primary' onClick={ onClick }>
      Log out
    </Button>
  )
}

export default LogoutButton
