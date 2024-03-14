import { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserData, useLoginMutation } from '../services/auth'
import { isErrorWithMessage } from '../utils/isErrorWithMessage'
import { Paths } from '../paths'

import { Typography, TextField, Button } from '@mui/material'
import { ErrorMessage } from '../components/ErrorMessage'
import { Layout } from '../components/Layout/Layout'

import style from './LoginPage.module.css'

//TODO: fix this
type TUserData = Omit<UserData, 'name'>

export const LoginPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<TUserData>({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const [loginUser, loginUserResult] = useLoginMutation()

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = formData
    try {
      await loginUser(data).unwrap()
      navigate(Paths.home)
    } catch (err) {
      const maybeError = isErrorWithMessage(err)
      maybeError ? setError(err.data.message) : setError('Unknown error')
    }
    // setFormData({ email: '', password: '' })
  }

  return (
    <Layout>
      <form className={style.login_form} onSubmit={login}>
        <Typography variant='h4' component='div' ml={16}>
          Login
        </Typography>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          id='outlined-adornment-password'
          type='password'
          label='Password'
          variant='outlined'
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <div className={style.noaccaunt_container}>
          <p>
            <span>
              No accaunt? <Link to={Paths.registration}>Regestration</Link>{' '}
            </span>
          </p>
          <Button type='submit'>Send</Button>
        </div>
        <ErrorMessage message={error} />
        {/* <div className={style.button_container}></div> */}
      </form>
    </Layout>
  )
}
