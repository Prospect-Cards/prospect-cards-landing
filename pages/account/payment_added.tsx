import { AppProps } from 'next/app'
import PaymentAdded from 'components/account/PaymentAdded'
import PrivateRoute from 'components/PrivateRoute'

const PaymentAddedRoute = ({ pageProps }: AppProps): JSX.Element => {
  return (
    <PrivateRoute>
      <PaymentAdded { ...pageProps } />
    </PrivateRoute>
  )
}

export default PaymentAddedRoute
