import { useApolloClient } from '@apollo/client'
import {useRouter} from 'next/router'

const useLogout = (): VoidFunction => {
  const client = useApolloClient()
  const router = useRouter()

  return () => {
    if (typeof window === 'undefined') return

    localStorage.removeItem('prospect-cards-token')
    client.clearStore()
    router.push('/login')
  }
}

export default useLogout