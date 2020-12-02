import { useAddPaymentQuery, useSyncPaymentMutation } from 'types/graphql'
import Dumb from './AddPayment'
import ErrorMessage from 'components/common/ErrorMessage'
import FormSkeleton from 'components/common/FormSkeleton'
import React from 'react'

const AddPayment = (): JSX.Element => {
  const { data, loading, error } = useAddPaymentQuery()
  const [syncPayment] = useSyncPaymentMutation()

  if (loading) return <FormSkeleton />
  if (!data || error) return <ErrorMessage message={ error?.message } />

  return <Dumb data={ data } syncPayment={ syncPayment } />
}

export default AddPayment
