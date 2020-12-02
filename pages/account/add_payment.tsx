import { AppProps } from 'next/app'
import AddPayment from 'components/account/AddPayment'
import PrivateRoute from 'components/PrivateRoute'

const AddPaymentRoute = ({ pageProps }: AppProps): JSX.Element => {
  return (
    <PrivateRoute>
      <AddPayment { ...pageProps } />
    </PrivateRoute>
  )
}

export default AddPaymentRoute
