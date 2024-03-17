import { IEmployee } from './'
import { api } from './api.ts'

export const employeesApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllEmployees: builder.query<IEmployee[], void>({
      query: () => ({
        url: '/employees',
        method: 'GET'
      })
    }),
    getEmployee: builder.query<IEmployee, string>({
      query: id => ({
        url: `/employees/${id}`,
        method: 'GET'
      })
    }),
    editEmployee: builder.mutation<string, IEmployee>({
      query: employee => ({
        url: `/employees/edit/${employee.id}`,
        method: 'PUT'
      })
    }),
    removeEmployee: builder.mutation<IEmployee, string>({
      query: id => ({
        url: `/employees/remove/${id}`,
        method: 'DELETE',
        body: { id }
      })
    }),
    addEmployee: builder.mutation<string, IEmployee>({
      query: employee => ({
        url: `/employees/add/${employee.id}`,
        method: 'POST',
        body: employee
      })
    })
  })
})

export const {
  useGetAllEmployeesQuery,
  useGetEmployeeQuery,
  useEditEmployeeMutation,
  useRemoveEmployeeMutation,
  useAddEmployeeMutation
} = employeesApi

export const {
  endpoints: { getAllEmployees, getEmployee, editEmployee, removeEmployee, addEmployee }
} = employeesApi
