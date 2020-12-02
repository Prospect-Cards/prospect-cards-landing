import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { Typography, createStyles, withStyles } from '@material-ui/core'
import { UserListingsQuery } from 'types/graphql'
import { useRouter } from 'next/router'
import ListingsGrid from 'components/listings/ListingsGrid'
import MyListings from 'components/listings/MyListings'
import PurchaseHistory from 'components/PurchaseHistory'
import React, { ChangeEvent } from 'react'

interface Props {
  data: UserListingsQuery;
}

const AccountListings = ({
  data: {
    viewer: { availableListings, soldListings },
  },
}: Props): JSX.Element => {
  const router = useRouter()
  const { params } = router.query

  const handleChange = (event: ChangeEvent<unknown>, newValue: string) => {
    if (!newValue) return

    router.push(`${newValue}`)
  }

  const StyledToggleButtonGroup = withStyles(() =>
    createStyles({
      root: {
        display: 'flex',
        maxWidth: 800,
        marginTop: 34,
        marginBottom: 60,
      },
    }),
  )(ToggleButtonGroup)

  const StyledToggleButton = withStyles(() =>
    createStyles({
      root: {
        flex: 1,
      },
    }),
  )(ToggleButton)

  // Maybe a better way to do this. Extracts first part of path that isn't
  // part of our matching route. So extracts `bids` from /items/bids

  const value = params && params[0]

  if (!value) {
    router.push('/items/listings')
  }

  return (
    <>
      <Typography>Current Offers</Typography>
      <StyledToggleButtonGroup
        value={ value }
        exclusive
        onChange={ handleChange }
        aria-label='Listings Tabs'
        size='small'
      >
        <StyledToggleButton value='listings' aria-label='my-listings'>
          My Listings
        </StyledToggleButton>
        <StyledToggleButton value='bids' aria-label='my-bids'>
          My Bids
        </StyledToggleButton>
        <StyledToggleButton value='purchases' aria-label='purchase-history'>
          Purchase History
        </StyledToggleButton>
        <StyledToggleButton value='sales' aria-label='sales-history'>
          Sale History
        </StyledToggleButton>
      </StyledToggleButtonGroup>
      {
        {
          listings: availableListings.length ? (
            <MyListings listings={ availableListings } />
          ) : (
            <Typography>You have no active listings</Typography>
          ),
          bids: 'TODO',
          purchases: <PurchaseHistory />,
          sales: soldListings.length ? (
            <ListingsGrid listings={ soldListings } />
          ) : (
            <Typography>You have no sold listings</Typography>
          ),
        }[value]
      }
    </>
  )
}

export default AccountListings
