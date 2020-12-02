import { ListingQuery } from 'types/graphql'
import Dumb from './Listing'
import React from 'react'

interface Props {
  data: ListingQuery;
}
const Listing = ({ data }: Props): JSX.Element => {
  return <Dumb data={ data } />
}

export default Listing
