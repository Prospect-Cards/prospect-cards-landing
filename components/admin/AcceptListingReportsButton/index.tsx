import {
  Maybe,
  useAcceptListingReportsMutation,
  useListingReportsQuery,
} from 'types/graphql'
import Dumb from './AcceptListingReportsButton'
import React from 'react'

interface Props {
  listingId: number;
}
const AcceptListingReportsButton = ({
  listingId,
}: Props): Maybe<JSX.Element> => {
  const { data } = useListingReportsQuery({ variables: { listingId } })
  const [accept] = useAcceptListingReportsMutation({
    variables: { listingId },
  })

  if (!data) return null

  return <Dumb accept={ accept } data={ data } />
}

export default AcceptListingReportsButton
