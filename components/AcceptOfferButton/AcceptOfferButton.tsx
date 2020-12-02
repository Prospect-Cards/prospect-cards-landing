import LoadingButton from 'components/common/LoadingButton'
import React from 'react'

interface Props {
  onClick: () => Promise<void>;
  loading: boolean;
}

const AcceptOfferButton = ({ onClick, loading }: Props): JSX.Element => {
  return (
    <LoadingButton
      variant='outlined'
      loading={ loading }
      onClick={ () => {
        onClick()
      } }
    >
      Accept
    </LoadingButton>
  )
}

export default AcceptOfferButton
