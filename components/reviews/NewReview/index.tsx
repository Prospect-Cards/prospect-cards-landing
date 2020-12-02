import {
  ReviewInput,
  usePurchaseQuery,
  useSaveReviewMutation,
} from 'types/graphql'
import { useRouter } from 'next/router'
import Dumb from './NewReview'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const NewReview = (): JSX.Element => {
  const router = useRouter()
  const { token } = router.query
  let tokenValue
  if (typeof token === 'string') {
    tokenValue = token
  } else {
    tokenValue = token[0]
  }

  const { data, loading, error } = usePurchaseQuery({
    variables: { token: tokenValue },
  })
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
