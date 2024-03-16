import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, selectUser } from '../../features/auth/authSlice'
import { Paths } from '../../paths'

import { Button } from '@mui/material'

import style from './Header.module.css'

export const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const handlerOnLogOut = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className={style.header}>
      <div className={style.home}>
        <h1 onClick={() => navigate(`${Paths.home}`)}>Home</h1>
      </div>
      <div className={style.actions}>
        {user ? (
          <>
            <div className={style.hidden}></div>
            <Button onClick={handlerOnLogOut}>Sign out</Button>
          </>
        ) : (
          <>
            <div>
              <h3 className={style.registration} onClick={() => navigate(`${Paths.registration}`)}>
                Registration
              </h3>
            </div>
            <Button onClick={handlerOnLogOut}>Sign in</Button>
          </>
        )}
      </div>
    </div>
  )
}
