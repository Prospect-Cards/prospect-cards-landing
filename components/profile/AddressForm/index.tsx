import {
  SaveProfileMutation,
  SaveProfileMutationVariables,
  useAddressQuery,
  useSaveProfileMutation,
} from 'types/graphql'
import Dumb, { Props as DumbProps } from './AddressForm'
import FormSkeleton from 'components/common/FormSkeleton'
import MutationContainer from 'lib/MutationContainer'
import React from 'react'

const AddressForm = (): JSX.Element => {
  const { data, loading } = useAddressQuery()
  const mutationTuple = useSaveProfileMutation()

  if (loading || !data) return <FormSkeleton />

  return (
    <MutationContainer<
    SaveProfileMutation,
    SaveProfileMutationVariables,
    DumbProps
    >
      mutationTuple={ mutationTuple }
      Dumb={ Dumb }
      data={ data }
    />
  )
}

export default AddressForm
