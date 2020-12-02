import { Maybe } from 'types/graphql'
import { QueryTuple } from '@apollo/client/react/types/types'
import Dumb from './Autocomplete'
import React, { useState } from 'react'

export interface Props<Result> {
  label: string;
  onChange: (name: string) => void;
  hookResult: Result;
  values?: { name: string; id: string }[];
  fetchImmediately?: boolean;
  name: string;
  placeholder?: string;
  value: string;
}

const Autocomplete = function <
  Q,
  V extends { name?: Maybe<string> },
  Result extends QueryTuple<Q, V>
>({
  label,
  onChange,
  hookResult,
  values,
  fetchImmediately,
  name,
  placeholder,
  value,
}: Props<Result>): JSX.Element {
  const [fetch, { loading, refetch }] = hookResult

  const [open, setOpen] = useState(false)

  const handleInputChange = (name: string) => {
    if (refetch) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      refetch({ name })
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fetch({ variables: { name } })
    }
  }

  const handleFocus = () => {
    if (fetchImmediately && !refetch) {
      fetch()
    }
  }

  return (
    <Dumb
      label={ label }
      values={ values }
      loading={ loading }
      open={ open }
      setOpen={ setOpen }
      handleChange={ onChange }
      handleInputChange={ handleInputChange }
      handleFocus={ handleFocus }
      value={ value }
      name={ name }
      placeholder={ placeholder }
    />
  )
}

export default Autocomplete
