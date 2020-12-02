import { useSaveListingMutation } from 'types/graphql'
import Dumb from './NewListing'
import React from 'react'

const NewListing = (): JSX.Element => {
  const [saveListing, { loading: saveLoading }] = useSaveListingMutation()

  return <Dumb saveListing={ saveListing } loading={ saveLoading } />
}

export default NewListing
