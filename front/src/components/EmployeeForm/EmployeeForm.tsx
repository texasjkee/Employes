import { FC } from 'react'
import { Employee } from '../../services'

import { Button, Card, TextField } from '@mui/material'
import { ErrorMessage } from '..'

import style from './EmployeeForm.module.css'

interface EmployeeFormProps<T> {
  onFinish: (values: T) => void
  btnText: string
  title: string
  error?: string
  employee?: T
}

export const EmployeeForm: FC<EmployeeFormProps<Employee>> = ({
  onFinish,
  title,
  btnText,
  error
}) => {
  return (
    <>
      <Card title={title} style={{ width: '30rem' }}>
        <form name='employee-from' onSubmit={onFinish} className={style.employee_form}>
          <TextField label='First name' variant='outlined' placeholder='First name' />
          <TextField label='Last name' variant='outlined' placeholder='Last name' />
          <TextField label='Age' variant='outlined' placeholder='Age' />
          <TextField label='Address' variant='outlined' placeholder='Address' />
          <ErrorMessage message={error} />
          <Button>{btnText}</Button>
        </form>
      </Card>
    </>
  )
}
