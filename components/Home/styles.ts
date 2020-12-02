import { StyleRules, Theme, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    resultsWrapper: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
    },
    searchBox: {
      borderRadius: 20,
      height: 40,
      marginBottom: spacing(),
    },
    filterPaper: {
      padding: spacing(),
      marginBottom: spacing(),
    },
  }),
)
