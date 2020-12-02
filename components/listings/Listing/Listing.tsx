import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core'
import Link  from 'components/common/Link'
import { ListingQuery, ListingStatusEnum } from 'types/graphql'
import AcceptListingReportsButton from 'components/admin/AcceptListingReportsButton'
import AdminComponent from 'components/AdminComponent'
import Carousel from 'components/common/Carousel'
import FavoriteListingToggle from 'components/favorites/FavoriteListingToggle'
import Helmet from 'react-helmet'
import OfferForm from 'components/OfferForm'
import PrivateComponent from 'components/PrivateComponent'
import React from 'react'
import ReportListingButton from 'components/listings/ReportListingButton'
import SimilarListings from 'components/listings/SimilarListings'
import StopPropogation from 'components/common/StopPropogation'
import ToggleListingEnabledButton from 'components/admin/ToggleListingEnabledButton'
import useStyles from './styles'

interface Props {
  data: ListingQuery;
}

const Listing = ({ data: { listing } }: Props): JSX.Element => {
  const classes = useStyles()
  const {
    id,
    title,
    description,
    player,
    status,
    ownedByUser,
    isFavorited,
  } = listing

  return (
    <>
      <Helmet>
        <title>Prospect Cards - {listing.title}</title>
      </Helmet>
      <div className={ classes.root }>
        <Card className={ classes.card }>
          <CardContent>
            <PrivateComponent>
              <StopPropogation className={ classes.favoriteContainer }>
                <FavoriteListingToggle
                  listingId={ id }
                  isFavorited={ Boolean(isFavorited) }
                />
              </StopPropogation>
            </PrivateComponent>
            <Grid container spacing={ 4 }>
              <Grid item md={ 6 } xs={ 12 }>
                <Carousel listing={ listing } height={ 500 } />
              </Grid>
              <Grid item md={ 6 } xs={ 12 }>
                <div className={ classes.detailsWrapper }>
                  <Typography variant='h1'>{title}</Typography>
                  <Typography variant='h2'>{player}</Typography>
                  <Typography>{description}</Typography>
                  <Divider className={ classes.divider } />
                  {!ownedByUser && (
                    <div className={ classes.offerButtonsContainer }>
                      <PrivateComponent
                        loggedOut={
                          <Button component={ Link } href='/login'>
                            Login to Purchase
                          </Button>
                        }
                      >
                        <>
                          <OfferForm listingId={ id } buyNow /> or
                          <OfferForm listingId={ id } />
                        </>
                      </PrivateComponent>
                    </div>
                  )}
                  <Typography variant='caption'>Seller</Typography>
                  <div className={ classes.sellerWrapper }>
                    This is info about the seller at some point.
                  </div>
                  <AdminComponent>
                    {status !== ListingStatusEnum.Sold ? (
                      <>
                        <AcceptListingReportsButton listingId={ id } />
                        <ToggleListingEnabledButton
                          listingId={ id }
                          status={ status }
                        />
                      </>
                    ) : (
                      ''
                    )}
                  </AdminComponent>
                </div>
              </Grid>
            </Grid>
          </CardContent>

          {!ownedByUser && (
            <PrivateComponent>
              <CardActions>
                <ReportListingButton listingId={ id } />
              </CardActions>
            </PrivateComponent>
          )}
        </Card>
        <SimilarListings listingId={ id } />
      </div>
    </>
  )
}

export default Listing
