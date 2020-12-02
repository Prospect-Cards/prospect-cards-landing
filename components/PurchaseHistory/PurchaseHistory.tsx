import { Fab, Paper, Typography } from '@material-ui/core'
import { PurchasesQuery } from 'types/graphql'
import { centsToDollars } from 'lib/money'
import { dateFormat } from 'lib/time'
import Image from 'components/common/Image'
import React from 'react'
import ReceiptIcon from 'assets/svg/ReceiptIcon'
import useStyles from './styles'

interface Props {
  data: PurchasesQuery;
}

const PurchaseHistory = ({
  data: {
    viewer: { purchases },
  },
}: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      {purchases.length ? (
        purchases.map((purchase) => (
          <Paper key={ purchase.id } className={ classes.purchase }>
            <Image image={ purchase.listing.images[0] } className={ classes.img } />
            <Typography>{purchase.listing.title}</Typography>

            <Typography>{centsToDollars(purchase.offer.price)}</Typography>
            <Typography>{purchase.listing.seller.username}</Typography>
            <Typography>{dateFormat(purchase.createdAt)}</Typography>
            <Fab color='primary'>
              <ReceiptIcon />
            </Fab>
          </Paper>
        ))
      ) : (
        <Typography>You have no previous purchases</Typography>
      )}
    </>
  )
}

export default PurchaseHistory
