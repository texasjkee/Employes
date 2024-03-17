import { createBrowserRouter } from 'react-router-dom'
import { Paths } from '../paths'

import {
  AddEmployeePage,
  EditEmployee,
  Employee,
  Employees,
  LoginPage,
  RegisterPage,
  StatusPage
} from '../pages'

export const router = createBrowserRouter([
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
  },
  {
    path: `${Paths.employee}/:id`,
    element: <Employee />
  },
  {
    path: `${Paths.employeeEdit}/:id`,
    element: <EditEmployee />
  },
  {
    path: `${Paths.status}/:status`,
    element: <StatusPage />
  }
])
