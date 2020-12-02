import { Divider, Grid, Typography } from '@material-ui/core'
import { SellerQuery } from 'types/graphql'
import FavoriteSellerToggle from 'components/favorites/FavoriteSellerToggle'
import Image from 'components/common/Image'
import RatingWithLabel from 'components/common/RatingWithLabel'
import React from 'react'
import useStyles from './styles'

interface Props {
  data: SellerQuery;
}

const SellerProfile = ({ data: { seller } }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Grid container>
      <Typography>Seller Profile</Typography>
      <Grid item xs={ 12 }>
        <Divider />
        <Grid item xs={ 12 } className={ classes.profileOverview }>
          <Image
            url={ seller.profilePictureUrl }
            alt={ `${seller.username} profile` }
            width={ 200 }
            height={ 200 }
          />
          <Typography>{seller.username}</Typography>
          <Grid item>
            <RatingWithLabel rating={ 2 } label='Item as described' />
            <RatingWithLabel rating={ 3 } label='Communication' />
            <RatingWithLabel rating={ 4 } label='Shipping Time' />
            <RatingWithLabel rating={ 5 } label='Shipping Charges' />
          </Grid>

          <Grid item>
            <FavoriteSellerToggle
              isFavorited={ seller.isFavorited }
              sellerId={ seller.id }
              button
            />
          </Grid>
        </Grid>
        <Divider />
      </Grid>
    </Grid>
  )
}

export default SellerProfile
