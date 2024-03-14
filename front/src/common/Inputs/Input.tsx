import { TextField } from '@mui/material'
import { FC } from 'react'

interface InputProps {
  name?: string
  placeholder?: string
  type?: string
  label: string
}

export const Input: FC<InputProps> = ({ label }) => {
  return <TextField id='outlined-basic' label={label} variant='outlined' />
}
