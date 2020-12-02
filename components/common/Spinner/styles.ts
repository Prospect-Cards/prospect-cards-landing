import { StyleRules, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  (): StyleRules => ({
    container: {
      height: 'calc(100vh - 64px)',
      display: 'flex',
    },
  }),
)
