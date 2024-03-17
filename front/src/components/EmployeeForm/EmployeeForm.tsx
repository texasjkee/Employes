import { FC, useState } from 'react'
import { IEmployee } from '../../services'

import { Button, TextField } from '@mui/material'
import { ErrorMessage } from '..'

import style from './EmployeeForm.module.css'

interface EmployeeFormProps<T> {
  onAddEmployee: (values: T) => void
  btnText: string
  error?: string
  employee?: T
}

export const EmployeeForm: FC<EmployeeFormProps<IEmployee>> = ({
  onAddEmployee,
  btnText,
  error
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    address: ''
  })

  return (
    <>
      <form name='employee-from' className={style.employee_form}>
        <TextField
          label='First name'
          variant='outlined'
          onChange={e => setFormData({ ...formData, firstName: e.target.value })}
        />
        <TextField
          label='Last name'
          variant='outlined'
          onChange={e => setFormData({ ...formData, lastName: e.target.value })}
        />
        <TextField
          label='Age'
          variant='outlined'
          onChange={e => setFormData({ ...formData, age: e.target.value })}
        />
        <TextField
          label='Address'
          variant='outlined'
          onChange={e => setFormData({ ...formData, address: e.target.value })}
        />
        <ErrorMessage message={error} />
        {/* @ts-ignore */}
        <Button onClick={() => onAddEmployee(formData)}>{btnText}</Button>
      </form>
    </>
  )
}
