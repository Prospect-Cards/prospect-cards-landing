import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core'
import { ListingQuery, ListingStatusEnum } from 'types/graphql'
import { openGraphUrl } from 'lib/image'
import AcceptListingReportsButton from 'components/admin/AcceptListingReportsButton'
import AdminComponent from 'components/AdminComponent'
import ButtonLink from 'components/common/ButtonLink'
import Carousel from 'components/common/Carousel'
import FavoriteListingToggle from 'components/favorites/FavoriteListingToggle'
import Head from 'next/head'
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
    images,
  } = listing

  if (typeof window === 'undefined') {
    console.log('rendering server')
  }
  return (
    <>
      <Head>
        <title>Prospect Cards - {title}</title>
        <meta property='og:title' content={ title } />
        <meta property='og:image' content={ openGraphUrl(images[0].url) } />
        <meta property='og:site_name' content='Prospect Cards'/>
      </Head>
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
                          <Button component={ ButtonLink } href='/login'>
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
