import { AppProps } from 'next/app'
import PrivateRoute from 'components/PrivateRoute'
import Profile from 'components/profile/Profile'

const ProfileRoute = ({ pageProps }: AppProps): JSX.Element => {
  return (
    <PrivateRoute>
      <Profile { ...pageProps } />
    </PrivateRoute>
  )
}

export default ProfileRoute
