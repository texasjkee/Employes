import { FC } from 'react'
import { useCurrentQuery } from '../../services/auth'

interface AuthProps {
  children: JSX.Element
}

export const Auth: FC<AuthProps> = ({ children }) => {
  const { isLoading } = useCurrentQuery()

  if (isLoading) return <span>Loading...</span>
  return children
}
