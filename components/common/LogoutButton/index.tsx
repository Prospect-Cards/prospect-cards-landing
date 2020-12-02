import Dumb from './LogoutButton'
import React from 'react'
import useLogout from 'hooks/useLogout'

const LogoutButton = (): JSX.Element => {
  const logout = useLogout()

  return <Dumb onClick={ logout } />
}

export default LogoutButton
