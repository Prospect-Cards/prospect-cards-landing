import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { useApollo } from 'lib/apollo'
import AppContainer from 'components/AppContainer'
import CssBaseline from '@material-ui/core/CssBaseline'
import ErrorBoundary from 'components/ErrorBoundary'
import Head from 'next/head'
import React, { useEffect } from 'react'
import theme from 'lib/theme'
import type { AppProps /*, AppContext */ } from 'next/app'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HttpsRedirect from 'react-https-redirect'

const App = (props: AppProps): JSX.Element => {
  const apolloClient = useApollo(props.pageProps)
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    const v = document.querySelector('video'),
      sources = v.querySelectorAll('source'),
      lastsource = sources[sources.length - 1]
    lastsource.addEventListener(
      'error',
      function(ev) {
        const d = document.createElement('img')
        d.src =
          'https://prospect-cards-assets.imgix.net/landing/prospect-cards-landing-short.gif'
        d.innerHTML = v.innerHTML
        v.parentNode.replaceChild(d, v)
      },
      false,
    )
  }, [])

  return (
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      <HttpsRedirect>
        <ErrorBoundary>
          <Head>
            <title>Prospect Cards - Sports Card Marketplace</title>
            <meta
              name='viewport'
              content='minimum-scale=1, initial-scale=1, width=device-width'
            />
          </Head>
          <ApolloProvider client={ apolloClient }>
            <video autoPlay muted loop id='myVideo'>
              <source
                src='https://prospect-cards-assets.s3.amazonaws.com/landing/prospect-cards-landing.mp4'
                type='video/mp4'
              />
            </video>
            <div className='content'>
              <AppContainer { ...props } />
            </div>
          </ApolloProvider>
        </ErrorBoundary>
      </HttpsRedirect>
    </MuiThemeProvider>
  )
}

export default App
