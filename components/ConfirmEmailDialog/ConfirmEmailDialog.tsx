import { Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import Dialog from 'components/common/Dialog'
import React from 'react'

interface Props {
  open: boolean;
  retry: VoidFunction;
  loading: boolean;
}

const ConfirmEmailDialog = ({ open, retry, loading }: Props): JSX.Element => {
  const router = useRouter()

  return (
    <Dialog
      open={ open }
      loading={ loading }
      proceed={ (resp) => {
        if (resp) {
          retry()
        } else {
          router.back()
        }
      } }
      header='Please confirm your email address to continue.'
      rejectText='Not Now'
      confirmText='Retry'
      disableBackdropClick
    >
      <Typography>
        It looks like you haven't confirmed your email address yet. Please
        confirm your email address and try again.
      </Typography>
    </Dialog>
  )
}

export default ConfirmEmailDialog
