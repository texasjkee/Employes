import { FC, ReactNode } from 'react'
import { Button as CustomButton } from '@mui/material'

interface ButtonProps {
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <div>
      <CustomButton variant='contained'>{children}</CustomButton>
    </div>
  )
}
