import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetEmployeeQuery, useRemoveEmployeeMutation } from '../../services/employees'
import { IEmployee } from '../../services'
import { Paths } from '../../paths'

import { Button } from '@mui/material'
import { Header, Layout } from '../../components'

import style from './Employee.module.css'

export const Employee = () => {
  const navigate = useNavigate()
  const [employeeData, setEmployeeData] = useState<IEmployee>()
  const { id } = useParams()
  // @ts-ignore
  const { data } = useGetEmployeeQuery(id)
  const [removeEmployee] = useRemoveEmployeeMutation()

  useEffect(() => {
    if (data) setEmployeeData(data)
  }, [data])

  const onRemoveEmployee = async () => {
    try {
      if (id) {
        await removeEmployee(id)
        navigate(`${Paths.home}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />
      <Layout>
        <div className={style.employee_container}>
          <div className={style.employee_header}>
            <h3>Information about employee:</h3>
          </div>
          <div className={style.employee_content}>
            {employeeData ? (
              <>
                <p>{employeeData.firstName}</p>
                <p>{employeeData.lastName}</p>
                <p>{employeeData.age}</p>
                <p>{employeeData.address}</p>
              </>
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
          <Button onClick={onRemoveEmployee}>Delete</Button>
          <Button onClick={() => navigate(`${Paths.home}`)}>Go home</Button>
        </div>
      </Layout>
    </>
  )
}
