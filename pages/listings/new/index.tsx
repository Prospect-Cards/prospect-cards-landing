import { AppProps } from 'next/app'
import NewListing from 'components/listings/NewListing'
import PrivateRoute from 'components/PrivateRoute'

const NewListingRoute = ({ pageProps }: AppProps): JSX.Element => {
  return (
    <PrivateRoute>
      <NewListing { ...pageProps } />
    </PrivateRoute>
  )
}

export default NewListingRoute
