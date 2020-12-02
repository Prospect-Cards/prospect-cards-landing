import { useApolloClient } from '@apollo/client'

const useLogout = (): VoidFunction => {
  const client = useApolloClient()

  return () => {
    if (typeof window === 'undefined') return

    localStorage.removeItem('prospect-cards-token')
    client.clearStore()
    window.location.href = '/login'
  }
}

export default useLogout