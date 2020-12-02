import { StyleRules, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  (): StyleRules => ({
    root: {
      width: '100%',
      borderTop: '1px solid #aaa',
      padding: '52px 60px',
      marginTop: 50,
    },
    logo: {
      width: 100,
      height: 100,
      border: '1px solid #ccc',
      borderRadius: 16,
    },
  }),
)
