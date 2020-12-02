import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import { SimilarListingsQuery } from 'types/graphql'
import Carousel from 'components/common/Carousel'
import React from 'react'
import useStyles from './styles'

interface Props {
  data: SimilarListingsQuery;
}

const SimilarListings = ({
  data: {
    listing: { similarListings },
  },
}: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <>
      <Typography variant='h3'>Similar Items</Typography>
      <Grid container spacing={ 2 }>
        {similarListings.length ?
          similarListings.map((listing) => (
            <Grid item key={ listing.id }>
              <Card className={ classes.card }>
                <CardContent>
                  <Carousel height={ 160 } listing={ listing } />
                  <Typography>{listing.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          )) :
          null}
      </Grid>
    </>
  )
}

export default SimilarListings
