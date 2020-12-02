import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    seller: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: spacing(),
      marginBottom: spacing(2),
      '&:hover': {
        cursor: 'pointer',
      },
    },
    usernameImageContainer: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
)
