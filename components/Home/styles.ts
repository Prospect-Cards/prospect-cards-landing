import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing, breakpoints }: Theme): StyleRules => ({
    container: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'space-between',
      [breakpoints.up('md')]: {
        paddingLeft: 60,
        paddingRight: 60,  
      },
      
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
      justifyContent: 'center',
      alignItems: 'center',
      width: 9,
    },
  }),
)
