import {
  ReviewInput,
  usePurchaseQuery,
  useSaveReviewMutation,
} from 'types/graphql'
import { useParams } from 'react-router'
import Dumb from './NewReview'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const NewReview = (): JSX.Element => {
  const { token } = useParams<{ token: string }>()
  const { data, loading, error } = usePurchaseQuery({ variables: { token } })
  const [saveReview, { loading: saveLoading }] = useSaveReviewMutation()

  const handleSubmit = (values: ReviewInput): void => {
    saveReview({
      variables: {
        review: values,
      },
    }).then(({ data, errors }) => {
      if (errors?.length) {
        return
      }

      //   TODO: Do what after reviewing?
    })
  }

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } handleSubmit={ handleSubmit } loading={ saveLoading } />
}

export default NewReview
