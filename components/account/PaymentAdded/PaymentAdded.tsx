import { Button, Typography } from '@material-ui/core'
import Link  from 'components/common/Link'
import React from 'react'

const PaymentAdded = (): JSX.Element => {
  return (
    <div>
      <Typography>
        All set! Click here to check out our newest listings!
      </Typography>
      <Button component={ Link } href='/'>
        View Listings
      </Button>
    </div>
  )
}

export default PaymentAdded
