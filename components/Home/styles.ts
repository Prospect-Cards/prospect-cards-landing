import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    container: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'space-between',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: spacing(10),
      paddingBottom: spacing(10),
    },
    copy: {
      textAlign: 'center',
    },
    buySellTrack: {
      display: 'flex',
      flexDirection: 'column',
      width: 130,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
)
