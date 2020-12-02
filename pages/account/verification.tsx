import { AppProps } from 'next/app'
import PrivateRoute from 'components/PrivateRoute'
import StripeAccountVerification from 'components/account/StripeAccountVerification'

const StripeAccountVerificationRoute = ({
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <PrivateRoute>
      <StripeAccountVerification { ...pageProps } />
    </PrivateRoute>
  )
}

export default StripeAccountVerificationRoute
