import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  ({ breakpoints }: Theme): StyleRules => ({
    root: { width: '100%' },
    input: {
      [breakpoints.down('md')]: {
        textAlign: 'center',
      },
      // color: '#D29D1B',
    },
    btnBox: {
      marginBottom: 13,
    },
    submitBtn: {
      backgroundColor: '#FEFEFE',
      borderRadius: 18,
      height: '100%',
      width: '100%',
    },
  }),
)
