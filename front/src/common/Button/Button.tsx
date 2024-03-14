import { FC, ReactNode } from 'react'
import { Button as CustomButton } from '@mui/material'

interface ButtonProps {
  children: ReactNode
  type?: 'submit' | 'reset' | 'button' | undefined
}

export const Button: FC<ButtonProps> = ({ children, type }) => {
  return (
    <div>
      <CustomButton type={type} variant='contained'>
        {children}
      </CustomButton>
    </div>
  )
}
