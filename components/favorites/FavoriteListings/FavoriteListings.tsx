import { FavoriteListingsQuery } from 'types/graphql'
import { Link, Paper, Typography } from '@material-ui/core'
import { centsToDollars } from 'lib/money'
import { dateFormat } from 'lib/time'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  const classes = useStyles()

  return (
    <div>
      {favoriteListings.length ? (
        favoriteListings.map((listing) => (
          <Paper
            key={ listing.id }
            className={ classes.listing }
            onClick={ () => {
              router.push(`/listings/${listing.id}`)
            } }
          >
            <Image url={ listing.images[0].url } className={ classes.img } />
            <Typography>{listing.title}</Typography>

            <Typography>{centsToDollars(listing.price)}</Typography>
            <StopPropogation>
              <Link
                onClick={ () =>
                  router.push(`/sellers/${listing.seller.username}`)
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
