import {
  TagTypesEnum,
  TagsLazyQueryHookResult,
  TagsQuery,
  TagsQueryVariables,
  useTagsLazyQuery,
} from 'types/graphql'
import { useField } from 'formik'
import Autocomplete from 'components/common/Autocomplete'
import React from 'react'

interface Props {
  context: TagTypesEnum;
  label: string;
  name: string;
  placeholder: string;
}

const NewListingTagField = ({
  placeholder,
  context,
  label,
  name,
}: Props): JSX.Element => {
  const [field, , helpers] = useField(name)
  const hookResult = useTagsLazyQuery({
    variables: {
      context,
      minimum: 5,
    },
  })

  return (
    <Autocomplete<TagsQuery, TagsQueryVariables, TagsLazyQueryHookResult>
      { ...field }
      label={ label }
      onChange={ (val: string) => helpers.setValue(val) }
      hookResult={ hookResult }
      placeholder={ placeholder }
      name={ name }
      values={ hookResult[1].data?.tags }
      fetchImmediately
    />
  )
}

export default NewListingTagField
