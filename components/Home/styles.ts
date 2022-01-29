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
        marginTop: spacing(8),
        marginBottom: spacing(6),
      },
      [breakpoints.down('xs')]: {
        width: '70%',
        paddingTop: spacing(3),
        paddingBottom: spacing(3),
      },
    },
    center: {
      textAlign: 'center',
    },
    mt: {
      marginTop: spacing(2),
    },
    buySellTrack: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 9,
    },
    bannerText: {
      fontSize: '3.5rem',
    },
    cardImg: {
      borderRadius: 10,
    },
    times: {
      height: '100%',
      fontSize: '4rem',
      width: 100,
      textAlign: 'center',
    },
  }),
)
