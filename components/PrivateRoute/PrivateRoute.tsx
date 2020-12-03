import {useRouter} from 'next/router'

export interface Props {
  isAuthenticated: boolean;
  children: JSX.Element;
}

const PrivateRoute = ({ children, isAuthenticated }: Props): JSX.Element => {
  const router = useRouter()
  if (isAuthenticated) {
    return children
  } else if (typeof window !== 'undefined') {
    router.push('/')
    return null
  }
}

export default PrivateRoute
