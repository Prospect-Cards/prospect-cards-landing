import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  (theme: Theme): StyleRules => ({
    profileOverview: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    img: {
      height: 140,
    },
  }),
)
