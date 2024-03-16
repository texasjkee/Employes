import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../../features/auth/authSlice'
import { useGetAllEmployeesQuery } from '../../services/employees'
import { Paths } from '../../paths'

import { Header, Layout } from '../../components'
import { Button } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import style from './Employees.module.css'

export const Employees = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const { data, isLoading } = useGetAllEmployeesQuery()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [navigate, user])

  const handleAddEmployee = () => navigate(`${Paths.employeeAdd}`)

  return (
    <>
      <Header />
      <Layout>
        <div>
          <Button
            variant='contained'
            sx={{ mb: 4 }}
            onClick={handleAddEmployee}
            className={style.button_add}
          >
            Add
          </Button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Employees ID</TableCell>
                  <TableCell align='right'>First name</TableCell>
                  <TableCell align='right'>Last name</TableCell>
                  <TableCell align='right'>Age</TableCell>
                  <TableCell align='right'>Adress</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map(employee => (
                  <TableRow
                    key={employee.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    onClick={() => navigate(`${Paths.employee}/${employee.id}`)}
                    className={style.employee_row}
                  >
                    <TableCell component='th' scope='row'>
                      {employee.id}
                    </TableCell>
                    <TableCell align='right'>{employee.firstName}</TableCell>
                    <TableCell align='right'>{employee.lastName}</TableCell>
                    <TableCell align='right'>{employee.age}</TableCell>
                    <TableCell align='right'>{employee.address}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Layout>
    </>
  )
}
