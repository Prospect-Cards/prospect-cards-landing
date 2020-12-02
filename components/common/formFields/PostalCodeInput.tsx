import MaskedNumber, { Props } from './MaskedNumber'
import React from 'react'

const PostalCodeInput = (props: Props): JSX.Element => {
  return <MaskedNumber format='#####' { ...props } />
}

export default PostalCodeInput
