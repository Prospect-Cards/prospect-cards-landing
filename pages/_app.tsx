import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'styles/carousel.css'
import 'styles/reactiveSearch.css'
import { ApolloProvider } from '@apollo/client'
import AppContainer from 'components/AppContainer'
import ErrorBoundary from 'components/ErrorBoundary'
import Helmet from 'react-helmet'
import type { AppProps /*, AppContext */ } from 'next/app'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HttpsRedirect from 'react-https-redirect'

import  {useApollo} from 'lib/apollo'

const App = (props: AppProps): JSX.Element => {
  const apolloClient = useApollo(props.pageProps)

  return (
    <HttpsRedirect>
      <ErrorBoundary>
        <Helmet>
          <title>Prospect Cards - Sports Card Marketplace</title>
        </Helmet>
        <ApolloProvider client={ apolloClient }>
          <AppContainer { ...props } />
        </ApolloProvider>
      </ErrorBoundary>
    </HttpsRedirect>
  )
}

export default App
