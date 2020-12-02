import { AppProps } from 'next/app'
import React from 'react'

export interface Props extends AppProps {
  isAuthenticated: boolean;
}

const PrivateRoute = ({
  Component,
  isAuthenticated,
  pageProps,
}: Props): JSX.Element => {
  if (isAuthenticated) {
    return <Component { ...pageProps } />
  } else if (typeof window !== 'undefined'){
    window.location.href = '/'
  }
}

export default PrivateRoute
