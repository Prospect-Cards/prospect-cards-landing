import { Skeleton } from '@material-ui/lab'
import React from 'react'
import useCardStyles from 'components/listings/SearchResult/styles'
import useStyles from 'components/Home/styles'

const ListingSkeletons = (): JSX.Element => {
  const classes = useStyles()
  const cardClasses = useCardStyles()

  const skel = (
    <div className={ cardClasses.resultCard }>
      <Skeleton variant='rect' width={ 210 } height={ 240 } />
      <Skeleton width='45%' />
      <Skeleton width='60%' />
    </div>
  )

  return (
    <div className={ classes.resultsWrapper }>
      {skel}
      {skel}
      {skel}
      {skel}
      {skel}
      {skel}
      {skel}
      {skel}
      {skel}
      {skel}
      {skel}
      {skel}
    </div>
  )
}

export default ListingSkeletons
