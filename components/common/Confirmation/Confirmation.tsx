import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ReactConfirmProps, confirmable } from 'react-confirm'
import { TransitionProps } from '@material-ui/core/transitions'
import React from 'react'
import theme from 'lib/theme'

interface Props extends ReactConfirmProps {
  text: string;
  title?: string;
  confirmText?: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ ref } { ...props } />
})

const Confirmation = ({
  show,
  proceed,
  text,
  title = 'Are you sure?',
  confirmText = 'Agree',
}: Props): JSX.Element => {
  return (
    <MuiThemeProvider theme={ theme }>
      <Dialog
        open={ show }
        TransitionComponent={ Transition }
        onClose={ () => proceed() }
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ () => proceed() } color='secondary'>
            Close
          </Button>
          <Button
            variant='contained'
            onClick={ () => proceed('agree') }
            color='primary'
          >
            {confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </MuiThemeProvider>
  )
}

export default confirmable(Confirmation)
