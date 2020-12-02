import { AppProps } from 'next/app'
import NewMembership from 'components/memberships/NewMembership'
import PrivateRoute from 'components/PrivateRoute'

const NewMembershipRoute = ({
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <PrivateRoute>
      <NewMembership { ...pageProps } />
    </PrivateRoute>
  )
}

export default NewMembershipRoute
