import { AppProps } from 'next/app'
import PrivateRoute from 'components/PrivateRoute'
import SellerSetup from 'components/account/SellerSetup'

const SellerSetupRoute = ({ pageProps }: AppProps): JSX.Element => {
  return (
    <PrivateRoute>
      <SellerSetup { ...pageProps } />
    </PrivateRoute>
  )
}

export default SellerSetupRoute
