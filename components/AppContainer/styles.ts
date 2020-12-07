import { StyleRules, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  (): StyleRules => ({
    content: {
      flexGrow: 1,
      minHeight: '100vh',
    },
    container: {
      padding: 0,
    },
  }),
)
