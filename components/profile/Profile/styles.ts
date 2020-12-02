import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  ({ palette }: Theme): StyleRules => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      marginTop: 75,
    },
    tabs: {
      borderRight: `1px solid ${palette.divider}`,
    },
    panel: {
      width: '600px',
      margin: 'auto',
    },
  }),
)
