import 'react-toastify/dist/ReactToastify.css'
import { Maybe } from 'types/graphql'
import { ToastContainer, toast } from 'react-toastify'
import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'
import type { AppProps /*, AppContext */ } from 'next/app'

const AppContainer = ({
  Component,
  pageProps,
}: AppProps): Maybe<JSX.Element> => {
  const classes = useStyles()
  return (
    <>
      <main className={ classes.content }>
        <Container maxWidth='xl' className={ classes.container }>
          <Component { ...pageProps } />
        </Container>
      </main>

      <ToastContainer
        position={ toast.POSITION.BOTTOM_CENTER }
      />
    </>
  )
}

export default AppContainer
