import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  (theme: Theme): StyleRules => ({
    root: { width: '100%' },
    input: {
    },
    submitBtn: {
      backgroundColor: '#FEFEFE',
      borderRadius: 18,
      width: '50%',
      marginBottom: 13,
      height: 32,
    },
  }),
)
