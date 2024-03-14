import { Link } from 'react-router-dom'
import { Paths } from '../paths'

import { Typography, TextField, Button } from '@mui/material'
import { Layout } from '../components/Layout/Layout'
import { useState, FormEvent } from 'react'

import style from './LoginPage.module.css'

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    mail: '',
    password: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ mail: '', password: '' })
  }
  return (
    <Layout>
      <form className={style.login_form} onSubmit={handleSubmit}>
        <Typography variant='h4' component='div' ml={16}>
          Login
        </Typography>
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
        <div className={style.noaccaunt_container}>
          <h4 className=''>
            No accaunt? <Link to={Paths.registration}>Regestration</Link>{' '}
          </h4>
        </div>
        <div className={style.button_container}>
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Layout>
  )
}
