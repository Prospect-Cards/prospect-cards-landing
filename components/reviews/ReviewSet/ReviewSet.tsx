import { Box, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { ReviewFragment } from 'types/graphql'
import React from 'react'
import useStyles from './styles'

interface Props {
  review: ReviewFragment;
}

const ReviewSet = ({ review }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <Box component='fieldset' mb={ 3 } borderColor='transparent'>
        <Typography component='legend'>Speed</Typography>
        <Rating readOnly name='speed' value={ +(review.speed || 0) } />
      </Box>
      <Box component='fieldset' mb={ 3 } borderColor='transparent'>
        <Typography component='legend'>Accuracy</Typography>
        <Rating readOnly name='accuracy' value={ +(review.accuracy || 0) } />
      </Box>
      <Box component='fieldset' mb={ 3 } borderColor='transparent'>
        <Typography component='legend'>Communication</Typography>
        <Rating
          readOnly
          name='communication'
          value={ +(review.communication || 0) }
        />
      </Box>
    </>
  )
}

export default ReviewSet
