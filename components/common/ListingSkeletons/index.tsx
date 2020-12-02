import ListingSkeleton from 'components/common/ListingSkeleton'
import React from 'react'
import useStyles from './styles'

const ListingSkeletons = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={ classes.root }>
      <ListingSkeleton />
      <ListingSkeleton />
      <ListingSkeleton />
      <ListingSkeleton />
      <ListingSkeleton />
      <ListingSkeleton />
      <ListingSkeleton />
    </div>
  )
}

export default ListingSkeletons
