import { Button, Typography } from '@material-ui/core'
import ButtonLink  from 'components/common/ButtonLink'
import React from 'react'

const PaymentAdded = (): JSX.Element => {
  return (
    <div>
      <Typography>
        All set! Click here to check out our newest listings!
      </Typography>
      <Button component={ ButtonLink } href='/'>
        View Listings
      </Button>
    </div>
  )
}

export default PaymentAdded
