import { FavoriteListingsQuery } from 'types/graphql'
import { Link, Paper, Typography } from '@material-ui/core'
import { centsToDollars } from 'lib/money'
import { dateFormat } from 'lib/time'
import { useHistory } from 'react-router-dom'
import FavoriteListingToggle from 'components/favorites/FavoriteListingToggle'
import Image from 'components/common/Image'
import OfferForm from 'components/OfferForm'
import React from 'react'
import StopPropogation from 'components/common/StopPropogation'
import useStyles from './styles'

interface Props {
  data: FavoriteListingsQuery;
}

const FavoriteListings = ({
  data: {
    viewer: { favoriteListings },
  },
}: Props): JSX.Element => {
  const history = useHistory()

  const classes = useStyles()

  return (
    <div>
      {favoriteListings.length ? (
        favoriteListings.map((listing) => (
          <Paper
            key={ listing.id }
            className={ classes.listing }
            onClick={ () => {
              history.push(`/listings/${listing.id}`)
            } }
          >
            <Image image={ listing.images[0] } className={ classes.img } />
            <Typography>{listing.title}</Typography>

            <Typography>{centsToDollars(listing.price)}</Typography>
            <StopPropogation>
              <Link
                onClick={ () =>
                  history.push(`/sellers/${listing.seller.username}`)
                }
              >
                {listing.seller.username}
              </Link>
            </StopPropogation>
            <Typography>{dateFormat(listing.createdAt)}</Typography>
            <StopPropogation>
              <OfferForm listingId={ listing.id } buyNow />
            </StopPropogation>
            <StopPropogation>
              <FavoriteListingToggle
                button
                listingId={ listing.id }
                isFavorited={ listing.isFavorited }
              />
            </StopPropogation>
          </Paper>
        ))
      ) : (
        <Typography>You have no favorited listings...</Typography>
      )}
    </div>
  )
}

export default FavoriteListings
