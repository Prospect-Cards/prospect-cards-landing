import { useReportListingMutation } from 'types/graphql'
import Dumb from './ReportListingButton'
import React, { useState } from 'react'

interface Props {
  listingId: number;
}
const ReportListingButton = ({ listingId }: Props): JSX.Element => {
  const [report, { loading }] = useReportListingMutation()
  const [open, setOpen] = useState(false)

  return (
    <Dumb
      open={ open }
      setOpen={ setOpen }
      report={ report }
      loading={ loading }
      listingId={ listingId }
    />
  )
}

export default ReportListingButton
