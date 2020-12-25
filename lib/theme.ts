import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
// REVIEW: Needed?
// https://material-ui.com/components/about-the-lab/#typescript
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as type from '@material-ui/lab/themeAugmentation'
import { responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        '&::before': {
          borderColor: '#EFEFEF',
        },
      },
      input: {
        fontSize: '1.25rem',
        fontFamily: 'acumin-pro, sans-serif;',
        color: 'white',
        width: '50%',
      },
    },
  },
  palette: {
    primary: {
      main: '#EFEFEF',
    },
    error: {
      main: '#EFEFEF',
    },
    text: {
      primary: '#EFEFEF',
    },
  },
  typography: {
    fontFamily: 'acumin-pro, sans-serif;',
    h1: {
      fontFamily: 'acumin-pro-condensed, sans-serif;',
      fontWeight: 900,
      fontSize: '7rem',
      color: 'white',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'acumin-pro-condensed, sans-serif;',
      fontSize: '1.125rem',
      fontWeight: 700,
      letterSpacing: '0.06rem',
    },
  },
})

export default responsiveFontSizes(theme)
