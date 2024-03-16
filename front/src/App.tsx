import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Paths } from './paths'

import { Auth } from '../src/features/auth/Auth'
import { AddEmployeePage, Employees, LoginPage, RegisterPage } from './pages'

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Employees />
  },
  {
    path: Paths.login,
    element: <LoginPage />
  },
  {
    path: Paths.registration,
    element: <RegisterPage />
  },
  {
    path: Paths.employeeAdd,
    element: <AddEmployeePage />
  }
])

export const App = () => {
  return (
    <Auth>
      <RouterProvider router={router} />
    </Auth>
  )
}
