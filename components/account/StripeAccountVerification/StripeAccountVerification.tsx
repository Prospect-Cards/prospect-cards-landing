import { Button, Typography } from '@material-ui/core'
import ButtonLink  from 'components/common/ButtonLink'
import { StripeAccountQuery } from 'types/graphql'
import React from 'react'

interface Props {
  data: StripeAccountQuery;
}

const StripeAccountVerification = ({ data }: Props): JSX.Element => {
  if (data.viewer.stripeAccount.chargesEnabled) {
    return (
      <div>
        <Typography>
          Looks like you're all set! Let's get to selling!
        </Typography>
        <Button component={ ButtonLink } href='/listings/new'>
          Start Selling
        </Button>
      </div>
    )
  } else {
    return (
      <div>
        <Typography>
          Looks like something's missing... Click below to continue setting up
          payment.
        </Typography>
        <Button component={ ButtonLink } href='/account/sell'>
          Continue with Payments
        </Button>
      </div>
    )
  }
}

export default StripeAccountVerification
