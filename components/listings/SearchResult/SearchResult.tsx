import { ListingFragment } from 'types/graphql'
import { Paper, Typography } from '@material-ui/core'
import { centsToDollars } from 'lib/money'
import { useRouter } from 'next/router'
import Carousel from 'components/common/Carousel'
import FavoriteListingToggle from 'components/favorites/FavoriteListingToggle'
import OfferForm from 'components/OfferForm'
import PrivateComponent from 'components/PrivateComponent'
import React from 'react'
import StopPropogation from 'components/common/StopPropogation'
import useStyles from './styles'

interface Props {
  listing: ListingFragment;
}

const SearchResult = ({ listing }: Props): JSX.Element => {
  const router = useRouter()
  const classes = useStyles()

  return (
    <Paper
      key={ listing.id }
      className={ classes.resultCard }
      onClick={ () => {
        router.push(`/listings/${listing.id}`)
      } }
    >
      <Typography className={ classes.date } display='inline'>
        <PrivateComponent>
          <StopPropogation className={ classes.favoriteContainer }>
            <FavoriteListingToggle
              listingId={ listing.id }
              isFavorited={ Boolean(listing.isFavorited) }
            />
          </StopPropogation>
        </PrivateComponent>
      </Typography>

      <StopPropogation>
        <Carousel listing={ listing } height={ 240 } />
      </StopPropogation>
      <Typography variant='body2'>{listing.title}</Typography>
      <div className={ classes.grow } />
      <Typography variant='body2'>{centsToDollars(listing.price)}</Typography>
      <PrivateComponent>
        <StopPropogation>
          <OfferForm listingId={ listing.id } buyNow />
        </StopPropogation>
      </PrivateComponent>
    </Paper>
  )
}

export default SearchResult
