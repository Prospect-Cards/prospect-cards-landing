export interface Props {
  isAuthenticated: boolean;
  children: JSX.Element;
}

const PrivateRoute = ({ children, isAuthenticated }: Props): JSX.Element => {
  if (isAuthenticated) {
    return children
  } else if (typeof window !== 'undefined') {
    window.location.href = '/'
  }
}

export default PrivateRoute
