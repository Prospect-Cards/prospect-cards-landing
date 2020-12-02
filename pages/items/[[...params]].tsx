import { AppProps } from 'next/app'
import AccountListings from 'components/listings/AccountListings'
import PrivateRoute from 'components/PrivateRoute'

const NewListingRoute = ({ pageProps }: AppProps): JSX.Element => {
  return (
    <PrivateRoute>
      <AccountListings { ...pageProps } />
    </PrivateRoute>
  )
}

export default NewListingRoute
