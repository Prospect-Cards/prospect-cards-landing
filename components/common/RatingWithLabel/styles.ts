import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  (theme: Theme): StyleRules => ({
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
)
