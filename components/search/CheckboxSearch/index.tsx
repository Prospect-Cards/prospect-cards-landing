import { TagTypesEnum, useTagsQuery } from 'types/graphql'
import Dumb from './CheckboxSearch'
import MultiDataList from '@appbaseio/reactivesearch/lib/components/list/MultiDataList'
import React, { ComponentProps } from 'react'

interface Props
  extends Omit<ComponentProps<typeof MultiDataList>, 'showCheckbox'> {
  tagType: TagTypesEnum;
}

const CheckboxSearch = ({ tagType, ...props }: Props): JSX.Element => {
  const { data, refetch, loading } = useTagsQuery({
    variables: { context: tagType, includeSeeds: false },
    notifyOnNetworkStatusChange: true,
  })

  const update = (name: string) => {
    refetch({ name })
  }
  return <Dumb tagData={ data } loading={ loading } update={ update } { ...props } />
}

export default CheckboxSearch
