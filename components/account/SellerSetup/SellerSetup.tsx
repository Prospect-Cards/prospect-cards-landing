import { Button, Typography } from '@material-ui/core'
import { Maybe, StripeAccountQuery } from 'types/graphql'
import Link from 'next/link'
import React from 'react'

interface Props {
  data: StripeAccountQuery;
}

const SellerSetup = ({
  data: {
    viewer: {
      stripeAccount: { onboardingLink },
    },
  },
}: Props): Maybe<JSX.Element> => {
  if (onboardingLink && typeof window !== 'undefined') {
    window.location.href = onboardingLink
    return null
  } else {
    return (
      <>
        <Typography>Looks like you're already all set up!</Typography>
        <Link href='/listings/new'>
          <Button>Start Selling</Button>
        </Link>
      </>
    )
  }
}

export default SellerSetup
