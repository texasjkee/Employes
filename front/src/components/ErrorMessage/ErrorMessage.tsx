import Alert from '@mui/material/Alert'
import { FC } from 'react'

interface ErrorProps {
  message?: string
}

export const ErrorMessage: FC<ErrorProps> = ({ message }) => {
  if (!message) return null

  return <Alert severity='error'>{message}</Alert>
}
