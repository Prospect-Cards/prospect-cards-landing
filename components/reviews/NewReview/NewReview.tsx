import { Box, Typography } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { PurchaseQuery, ReviewInput } from 'types/graphql'
import { Rating, RatingProps } from '@material-ui/lab'
import LoadingButton from 'components/common/LoadingButton'
import React from 'react'
import ReviewSet from 'components/reviews/ReviewSet'
import useStyles from './styles'

interface Props {
  data: PurchaseQuery;
  handleSubmit: (values: ReviewInput) => void;
  loading: boolean;
}

const NewReview = ({
  data: { purchase },
  handleSubmit,
  loading,
}: Props): JSX.Element => {
  const classes = useStyles()

  if (purchase.review) {
    return (
      <Typography>
        Thanks for reviewing this purchase! We appreciate the feedback! It helps
        keep the community healthy and honest.
        <ReviewSet review={ purchase.review } />
      </Typography>
    )
  }

  const initialValues: ReviewInput = {
    purchaseId: purchase.id,
    speed: undefined,
    accuracy: undefined,
    communication: undefined,
  }

  return (
    <Formik initialValues={ initialValues } onSubmit={ handleSubmit }>
      {({ values, setFieldValue }) => {
        const handleChange: (name: string) => RatingProps['onChange'] = (
          name,
        ) => (_e, value) => {
          // Oddly, Rating component sets values as string, so convert to int
          setFieldValue(name, +(value || 0))
        }

        return (
          <Form>
            <Box component='fieldset' mb={ 3 } borderColor='transparent'>
              <Typography component='legend'>Speed</Typography>
              <Rating
                name='speed'
                value={ +(values.speed || 0) }
                onChange={ handleChange('speed') }
              />
            </Box>
            <Box component='fieldset' mb={ 3 } borderColor='transparent'>
              <Typography component='legend'>Accuracy</Typography>
              <Rating
                name='accuracy'
                value={ +(values.accuracy || 0) }
                onChange={ handleChange('accuracy') }
              />
            </Box>
            <Box component='fieldset' mb={ 3 } borderColor='transparent'>
              <Typography component='legend'>Communication</Typography>
              <Rating
                name='communication'
                value={ +(values.communication || 0) }
                onChange={ handleChange('communication') }
              />
            </Box>
            <LoadingButton type='submit' loading={ loading }>
              Submit
            </LoadingButton>
          </Form>
        )
      }}
    </Formik>
  )
}

export default NewReview
