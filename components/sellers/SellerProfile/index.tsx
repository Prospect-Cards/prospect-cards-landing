import { useRouter } from 'next/router'
import { useSellerQuery } from 'types/graphql'
import Dumb from './SellerProfile'
import ErrorMessage from 'components/common/ErrorMessage'
import React from 'react'
import Spinner from 'components/common/Spinner'

const SellerProfile = (): JSX.Element => {
  const router = useRouter()
  const { username } = router.query
  let usernameVal
  if (typeof username === 'string') {
    usernameVal = username
  } else {
    usernameVal = username[0]
  }
  const { data, loading, error } = useSellerQuery({
    variables: { username: usernameVal },
  })

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default SellerProfile
