import { StyleRules, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  (): StyleRules => ({
    root: { width: '100%' },
    submitBtn: {
      backgroundColor: '#FEFEFE',
      borderRadius: 18,
      width: '50%',
      marginBottom: 13,
      height: 32,
    },
  }),
)
