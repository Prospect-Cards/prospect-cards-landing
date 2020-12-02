import { Maybe } from 'types/graphql'
import { useApolloClient } from '@apollo/client'
import { useParams } from 'react-router-dom'
import Dumb from './ConfirmEmail'
import React, { useEffect, useState } from 'react'
import Spinner from 'components/common/Spinner'

const ConfirmEmail = (): Maybe<JSX.Element> => {
  const { token } = useParams<{ token: string }>()
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState<string>()
  const client = useApolloClient()

  useEffect(() => {
    fetch(
      `${process.env.apiUri}/users/confirmation.json?confirmation_token=${token}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(
        async(response): Promise<void> => {
          // Log the user in automatically after email confirmation
          const token = response.headers.get('Authorization')
          if (response.status === 200 && token) {
            localStorage.setItem('prospect-cards-token', token)
            client.resetStore()
            setMessage('Email confirmed! Welcome to Prospect Cards!')
          } else {
            setMessage(
              'Unable to confirm your email. You may have already confirmed it.',
            )
          }
        },
      )
      .catch(() => {
        setMessage(
          'Looks like we ran into an error. Please contact support if you continue to have issues.',
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }, [token, client])

  if (loading) return <Spinner />

  return <Dumb message={ message } />
}

export default ConfirmEmail
