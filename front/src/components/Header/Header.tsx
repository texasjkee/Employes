import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, selectUser } from '../../features/auth/authSlice'
import { Paths } from '../../paths'

import { Button, Typography } from '@mui/material'

import style from './Header.module.css'

export const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  //TODO: why is not useAppdispatch?
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className={style.header}>
      <div className={style.home}>
        <Typography
          sx={{ fontFamily: 'Monospace', textTransform: 'uppercase', fontSize: 'h5.fontSize' }}
          onClick={() => navigate(`${Paths.home}`)}
        >
          Home
        </Typography>
      </div>
      <div className={style.actions}>
        {user ? (
          <>
            <div className={style.hidden}></div>
            <Button onClick={onLogout}>Sign out</Button>
          </>
        ) : (
          <>
            <div className={style.registration}>
              <div>
                <Typography onClick={() => navigate(`${Paths.registration}`)}>
                  Registration
                </Typography>
              </div>
            </div>
            <Button onClick={onLogout}>Sign in</Button>
          </>
        )}
      </div>
    </div>
  )
}
