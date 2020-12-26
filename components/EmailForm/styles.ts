import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  ({ breakpoints }: Theme): StyleRules => ({
    root: { width: '100%' },
    input: {
      [breakpoints.down('md')]: {
        textAlign: 'center',

      },
      color: '#D29D1B', 
    },
    submitBtn: {
      backgroundColor: '#FEFEFE',
      borderRadius: 18,
      marginBottom: 13,
      height: 32,
      [breakpoints.down('md')]: {
        width: '100% !important',
      },
      [breakpoints.up('lg')]: {
        width: '50%',
      },
    },
  }),
)
