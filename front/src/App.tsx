import { RouterProvider } from 'react-router-dom'
import { Auth } from '../src/features/auth/Auth'
import { router } from './router/router'

export const App = () => {
  return (
    <Auth>
      <RouterProvider router={router} />
    </Auth>
  )
}
