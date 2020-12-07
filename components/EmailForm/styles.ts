import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  (theme: Theme): StyleRules => ({
    container: {
      maxWidth: 700,
      width: '80%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    submitBtn: {
      backgroundColor: '#FEFEFE',
      borderRadius: 18,
      width: 200,
      margin: theme.spacing(),
    },
  }),
)
