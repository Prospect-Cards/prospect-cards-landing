import { Box, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { dasherize } from 'inflection'
import React from 'react'
import useStyles from './styles'

interface Props {
  label: string;
  rating: number;
}

const RatingWithLabel = ({ label, rating }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Box
      component='fieldset'
      mb={ 3 }
      borderColor='transparent'
      className={ classes.ratingContainer }
    >
      <Rating name={ dasherize(label.toLowerCase()) } value={ rating } readOnly />
      <Typography>{label}</Typography>
    </Box>
  )
}

export default RatingWithLabel
