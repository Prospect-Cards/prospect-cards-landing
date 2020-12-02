import { Button, TextField } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import React from 'react'

const FormSkeleton = (): JSX.Element => {
  const skel = (
    <Skeleton width='100%'>
      <TextField variant='outlined' margin='normal' />
    </Skeleton>
  )
  return (
    <div style={ { width: '100%' } }>
      {skel}
      {skel}
      {skel}
      {skel}
      <Skeleton>
        <Button variant='outlined'>Submit</Button>
      </Skeleton>
    </div>
  )
}

export default FormSkeleton
