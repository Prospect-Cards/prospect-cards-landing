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
      [breakpoints.down('sm')]: {
        paddingLeft: spacing(3),
        paddingRight: spacing(3),
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      [breakpoints.up('sm')]: {
        paddingTop: spacing(10),
        paddingBottom: spacing(10),
      },
      [breakpoints.down('xs')]: {
        width: '70%',
        paddingTop: spacing(5),
        paddingBottom: spacing(5),
      },
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
