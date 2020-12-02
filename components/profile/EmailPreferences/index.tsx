import {
  useEmailPreferencesQuery,
  useSaveEmailPreferencesMutation,
} from 'types/graphql'
import {useRouter} from 'next/router'
import Dumb from './EmailPreferences'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const EmailPreferences = (): JSX.Element => {
  const router = useRouter()
  const { token } = router.query

  let tokenValue
  if (typeof token === 'string') {
    tokenValue = token
  } else {
    tokenValue = token[0]
  }

  console.log('eric', tokenValue)
  const { data, loading, error } = useEmailPreferencesQuery({
    variables: { token: tokenValue },
  })
  const [
    savePreferences,
    { loading: saveLoading },
  ] = useSaveEmailPreferencesMutation()
  if (loading) return <Spinner fullHeight />
  if (!data || error) return <ErrorMessage />

  return (
    <Dumb
      token={ tokenValue }
      data={ data }
      onSubmit={ savePreferences }
      loading={ saveLoading }
    />
  )
}

export default EmailPreferences
