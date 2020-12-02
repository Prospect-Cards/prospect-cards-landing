import { Button } from '@material-ui/core'
import ButtonLink  from 'components/common/ButtonLink'
import React from 'react'

interface Props {
  category: string;
}

const CategoryLink = ({ category }: Props): JSX.Element => {
  return (
    <Button color='secondary' component={ ButtonLink } href={ `/c/${category}` }>
      {category}
    </Button>
  )
}

export default CategoryLink
