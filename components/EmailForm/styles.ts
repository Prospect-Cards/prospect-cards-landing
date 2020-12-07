import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  (theme: Theme): StyleRules => ({

    container: {
      width: 700,
    },
    submitBtn: {
      backgroundColor: '#FEFEFE',
      borderRadius: 18,
      width: 200,
      margin: theme.spacing(),
    },
  }),
)
