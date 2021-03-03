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
        paddingRight: 10,
      },
    },
    MuiFormHelperText: {
      root: {
        color: '#D29D1B !important',
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
    h2: {
      fontWeight: 500,
      fontSize: '2.125rem',
      letterSpacing: '0.02rem',
    },
    h3: {
      fontWeight: 900,
      fontSize: '1.5rem',
      letterSpacing: '0.02rem',
      lineHeight: 1.43,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.125rem',
    },
    h5: {
      fontFamily: 'acumin-pro-condensed, helvetica',
      fontWeight: 700,
      fontSize: '1.125rem',
      textTransform: 'uppercase',
      lineHeight: 1.11,
      letterSpacing: '0.03rem',
    },
    h6: {
      fontFamily: 'acumin-pro-wide, acumin-pro, helvetica',
      fontWeight: 600,
      fontSize: '0.625rem',
      textTransform: 'uppercase',
      lineHeight: 1.56,
      letterSpacing: '0.01rem',
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '.75rem',
      letterSpacing: '0.06rem',
      lineHeight: 0.9,
      textTransform: 'uppercase',
      color: '#969696',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
      lineHeight: '1.125rem',
    },
    button: {
      fontFamily: 'acumin-pro-condensed, sans-serif;',
      fontSize: '1.25rem',
      fontWeight: 700,
      letterSpacing: '0.06rem',
    },
  },
})

export default responsiveFontSizes(theme)
