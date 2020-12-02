import { Button } from '@material-ui/core'
import Link  from 'components/common/Link'
import React from 'react'

interface Props {
  category: string;
}

const CategoryLink = ({ category }: Props): JSX.Element => {
  return (
    <Button color='secondary' component={ Link } href={ `/c/${category}` }>
      {category}
    </Button>
  )
}

export default CategoryLink
