import { useAccountQuery } from 'types/graphql'
import Dumb from './NavBar'
import React from 'react'

const NavBar = (): JSX.Element => {
  const { data, loading } = useAccountQuery()

  return <Dumb data={ data } loading={ loading } />
}

export default NavBar
