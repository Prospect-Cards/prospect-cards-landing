import { Button } from '@material-ui/core'
import Link  from 'components/common/Link'
import { ProductsQuery } from 'types/graphql'
import { centsToDollars } from 'lib/money'
import React from 'react'

interface Props {
  data: ProductsQuery;
}

const NewMembership = ({ data }: Props): JSX.Element => {
  return (
    <>
      {data.viewer.availableMemberships.map(
        (prod): JSX.Element => {
          return (
            <Button
              key={ prod.token }
              component={ Link }
              href={ `/account/add_payment/${prod.token}` }
            >
              {centsToDollars(prod.price)} per {prod.term}
            </Button>
          )
        },
      )}
    </>
  )
}

export default NewMembership
