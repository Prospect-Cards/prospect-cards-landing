import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    container: {
      minHeight: '100vh',
      paddingBottom: 100,
    },
    other: {
      flexGrow: 1,
    },
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
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
