import { FormEvent, useState } from 'react'
import { TextField, Typography } from '@mui/material'

import { Button } from '../../common/Button/Button'

import style from './Form.module.css'

interface IFormData {
  firstName: string
  mail: string
  password: string
}

export const Form = () => {
  const [formData, setFormData] = useState<IFormData>({
    firstName: '',
    mail: '',
    password: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ firstName: '', mail: '', password: '' })
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Typography variant='h4' component='div'>
        Registration
      </Typography>
      <TextField
        id='outlined-basic'
        label='First name'
        variant='outlined'
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      <TextField
        id='outlined-basic'
        label='Mail'
        variant='outlined'
        value={formData.mail}
        onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
      />
      <TextField
        id='outlined-adornment-password'
        label='Password'
        variant='outlined'
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <div className={style['button-container']}>
        <Button type='submit'>Send</Button>
      </div>
    </form>
  )
}
