import { useProfileQuery } from 'types/graphql'
import Dumb from './AccountDetails'
import ErrorMessage from 'components/common/ErrorMessage'
import FormSkeleton from 'components/common/FormSkeleton'
import React from 'react'

const AccountDetails = (): JSX.Element => {
  const { data, loading, error } = useProfileQuery()

  if (loading) return <FormSkeleton />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default AccountDetails
