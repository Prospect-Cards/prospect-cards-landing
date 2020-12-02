import { AppProps } from 'next/app'
import Favorites from 'components/favorites/Favorites'
import PrivateRoute from 'components/PrivateRoute'

const FavoritesRoute = ({
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <PrivateRoute>
      <Favorites { ...pageProps } />
    </PrivateRoute>
  )
}

export default FavoritesRoute
