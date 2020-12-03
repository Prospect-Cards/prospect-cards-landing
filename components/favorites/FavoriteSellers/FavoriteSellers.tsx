import { Button, Paper, Typography } from '@material-ui/core'
import { FavoriteSellersQuery } from 'types/graphql'
import { dateFormat } from 'lib/time'
import { useRouter } from 'next/router'
import ButtonLink from 'components/common/ButtonLink'
import FavoriteSellerToggle from 'components/favorites/FavoriteSellerToggle'
import Image from 'components/common/Image'
import StopPropogation from 'components/common/StopPropogation'
import useStyles from './styles'

interface Props {
  data: FavoriteSellersQuery;
}

const FavoriteSellers = ({
  data: {
    viewer: { favoriteSellers },
  },
}: Props): JSX.Element => {
  const router = useRouter()

  const classes = useStyles()

  return (
    <div>
      {favoriteSellers.length ? (
        favoriteSellers.map((seller) => (
          <Paper
            key={ seller.id }
            className={ classes.seller }
            onClick={ () => {
              router.push(`/sellers/${seller.username}`)
            } }
          >
            <div className={ classes.usernameImageContainer }>
              <Image
                url={ seller.profilePictureUrl }
                alt={ seller.username }
                height={ 80 }
                width={ 80 }
              />
              <Typography>{seller.username}</Typography>
            </div>

            <Typography>TODO: 95.4% Positive</Typography>
            <Typography>{dateFormat(seller.createdAt)}</Typography>
            <StopPropogation>
              <>
                <Button
                  component={ ButtonLink }
                  href={ `/sellers/${seller.username}` }
                >
                  View Seller
                </Button>
                <FavoriteSellerToggle
                  button
                  sellerId={ seller.id }
                  isFavorited={ seller.isFavorited }
                />
              </>
            </StopPropogation>
          </Paper>
        ))
      ) : (
        <Typography>You have no favorited sellers...</Typography>
      )}
    </div>
  )
}

export default FavoriteSellers
