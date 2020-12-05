import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    container: {
      minHeight: '100vh',
    },
    other: {
      flexGrow: 1,
    },
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: spacing(5),
    },
    rightPane: {
      width: 270,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderLeft: '1px solid #333',
      paddingTop: 75,
    },
  }),
)
