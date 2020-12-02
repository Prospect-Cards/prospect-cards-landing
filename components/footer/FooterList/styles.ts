import { StyleRules, makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  (): StyleRules => ({
    listItem: { paddingLeft: 0 },
    link: { textDecoration: 'none', color: 'inherit' },
  }),
)
