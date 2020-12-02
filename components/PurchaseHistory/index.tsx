import { usePurchasesQuery } from 'types/graphql'
import Dumb from './PurchaseHistory'
import QueryContainer from 'lib/QueryContainer'
import React from 'react'

const PurchaseHistory = (): JSX.Element => {
  return <QueryContainer hookResult={ usePurchasesQuery() } Dumb={ Dumb } />
}

export default PurchaseHistory
