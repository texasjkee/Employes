import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Paths } from './paths'

import { HomePage, LoginPage, RegisterPage } from './pages'

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <HomePage />
  },
  {
    path: Paths.login,
    element: <LoginPage />
  },
  {
    path: Paths.registration,
    element: <RegisterPage />
  }
])

export const App = () => {
  return <RouterProvider router={router} />
}
