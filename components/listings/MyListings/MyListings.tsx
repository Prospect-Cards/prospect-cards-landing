import {
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Switch,
  TableCell,
  TableRow,
  Typography,
  createStyles,
  withStyles,
} from '@material-ui/core'
import { ListingFragment } from 'types/graphql'
import { ToggleButton } from '@material-ui/lab'
import { centsToDollars } from 'lib/money'
import { useRouter } from 'next/router'
import AcceptOfferButton from 'components/AcceptOfferButton'
import Carousel from 'components/common/Carousel'
import React from 'react'
import useStyles from './styles'

interface Props {
  listings: ListingFragment[];
}

const link = (listing: ListingFragment, classes) => (
  <>
    <Typography className={ classes.title }>Details</Typography>
    <FormControlLabel
      labelPlacement='start'
      className={ classes.disableSwitch }
      control={
        <Switch
          size='small'
          checked={ false }
          // onChange={ toggleChecked }
        />
      }
      label='Temporarily Disable'
    />
    <Grid container spacing={ 1 }>
      <Grid item md={ 3 } xs={ 12 }>
        <Carousel listing={ listing } height={ 240 } />
        <Typography>{listing.player}</Typography>
        <Typography>{listing.description}</Typography>
      </Grid>
      <Grid item md={ 3 } xs={ 12 }>
        <Typography>Current Offers</Typography>
        {listing.offers.map((offer) => (
          <TableRow key={ offer.id }>
            <TableCell component='th' scope='row'>
              {centsToDollars(offer.price)}
            </TableCell>
            <TableCell align='right'>
              <AcceptOfferButton
                offerId={ offer.id }
                price={ centsToDollars(offer.price) }
              />
            </TableCell>
          </TableRow>
        ))}
      </Grid>
    </Grid>
  </>
)

const links = (listings: ListingFragment[], classes) => {
  const linkHash = {}

  listings.forEach((listing) => {
    linkHash[listing.id] = link(listing, classes)
  })

  return linkHash
}

const MyListings = ({ listings }: Props): JSX.Element => {
  const classes = useStyles()
  const router = useRouter()
  const { params } = router.query

  const handleChange = (newValue: number) => () => {
    if (!newValue) return

    router.push(`listings/${newValue}`)
  }

  const StyledToggleButton = withStyles(() =>
    createStyles({
      root: {
        marginTop: 10,
      },
    }),
  )(ToggleButton)

  const value = +params[1]

  if (!value) {
    router.push('listings/' + listings[0].id.toString())
  }

  return (
    <Card>
      <CardContent>
        <Grid container spacing={ 3 }>
          <Grid item>
            <Typography>Card</Typography>
            <Grid container direction='column'>
              {listings.map((listing) => (
                <StyledToggleButton
                  key={ listing.id }
                  value={ listing.id }
                  aria-label='list'
                  selected={ value === listing.id }
                  onClick={ handleChange(listing.id) }
                  className={ classes.sideCardToggle }
                >
                  <Typography noWrap>{listing.title}</Typography>
                </StyledToggleButton>
              ))}
            </Grid>
          </Grid>
          <Grid item xs>
            {links(listings, classes)[value]}

            {/*{listings.map((listing) => (*/}
            {/*  <Route key={ listing.id } path={ `${path}/${listing.id}` }>*/}
            {/*    */}
            {/*  </Route>*/}
            {/*))}*/}
            {/*<Redirect to={ `${path}/${listings[0].id}` } />*/}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default MyListings
