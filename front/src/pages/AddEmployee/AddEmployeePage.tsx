import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../../features/auth/authSlice'
import { IEmployee } from '../../services'
import { useAddEmployeeMutation } from '../../services/employees'
import { Paths } from '../../paths'

import { Header, Layout } from '../../components'
import { EmployeeForm } from '../../components/EmployeeForm/EmployeeForm'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'

export const AddEmployeePage = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [addEmployee] = useAddEmployeeMutation()

  useEffect(() => {
    if (!user) navigate('/login')
  }, [navigate, user])

  const onAddEmployee = async (data: IEmployee) => {
    try {
      await addEmployee(data).unwrap()

      navigate(`${Paths.status}/created`)
    } catch (err) {
      const maybeError = isErrorWithMessage(err)

      if (maybeError) {
        setError(err.data.message)
      } else {
        setError('Unknown error')
      }
    }
  }

  return (
    <>
      <Header />
      <Layout>
        <EmployeeForm btnText='Add' onAddEmployee={onAddEmployee} error={error} />
      </Layout>
    </>
  )
}
