import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import LoadingButton from 'components/common/LoadingButton'
import React from 'react'
import useStyles from './styles'

interface Props {
  handleClick: VoidFunction;
  isFavorited: boolean;
  button?: boolean;
  loading: boolean;
}

const FavoriteToggle = ({
  handleClick,
  isFavorited,
  button,
  loading,
}: Props): JSX.Element => {
  const classes = useStyles()

  if (button) {
    return (
      <LoadingButton loading={ loading } onClick={ handleClick }>
        {isFavorited ? 'Unfavorite' : 'Favorite'}
      </LoadingButton>
    )
  } else {
    return isFavorited ? (
      <Favorite className={ classes.icon } onClick={ handleClick } />
    ) : (
      <FavoriteBorder className={ classes.icon } onClick={ handleClick } />
    )
  }
}

export default FavoriteToggle
