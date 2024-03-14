import { useState, FormEvent } from 'react'

import { Typography, TextField, Button } from '@mui/material'
import { Layout } from '../components/Layout/Layout'

import style from './RegisterPage.module.css'

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.password === formData.confirmPassword) {
      console.log(formData)
    }
    setFormData({ name: '', mail: '', password: '', confirmPassword: '' })
  }

  return (
    <Layout>
      <form className={style.register_form} onSubmit={handleSubmit}>
        <Typography variant='h4' component='div' ml={11}>
          Registration
        </Typography>
        <TextField
          label='Name'
          variant='outlined'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          label='Mail'
          variant='outlined'
          value={formData.mail}
          onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
        />
        <TextField
          type='password'
          label='Password'
          variant='outlined'
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <TextField
          type='password'
          label='Confirm password'
          variant='outlined'
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
        <div className={style.button_container}>
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Layout>
  )
}
