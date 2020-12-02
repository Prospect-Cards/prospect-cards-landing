import 'react-toastify/dist/ReactToastify.css'
import { Elements } from '@stripe/react-stripe-js'
import { Maybe, useAppDataQuery } from 'types/graphql'
import { ToastContainer, toast } from 'react-toastify'
import Container from '@material-ui/core/Container'
import Footer from 'components/footer/Footer'
import NavBar from 'components/NavBar'
import React from 'react'
import stripe from 'lib/stripe'
import useStyles from './styles'
import type { AppProps /*, AppContext */ } from 'next/app'

const AppContainer = ({
  Component,
  pageProps,
}: AppProps): Maybe<JSX.Element> => {
  const classes = useStyles()
  // Top-level query used to prevent too many simultaneous queries in children
  const { loading } = useAppDataQuery()

  if (loading) return null

  return (
    <>
      <Elements stripe={ stripe }>
        <NavBar />
        <main className={ classes.content }>
          <div className={ classes.appBarSpacer } />
          <Container maxWidth='xl'>
            <Component { ...pageProps } />
          </Container>
        </main>
        <Footer />

        <ToastContainer position={ toast.POSITION.BOTTOM_CENTER } />
      </Elements>
    </>
  )
}

export default AppContainer
