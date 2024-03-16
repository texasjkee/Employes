import { Employee } from './'
import { api } from './api.ts'

export const employeesApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllEmployees: builder.query<Employee[], void>({
      query: () => ({
        url: '/employees',
        method: 'GET'
      })
    }),
    getEmployee: builder.query<Employee[], string>({
      query: id => ({
        url: `/employees/${id}`,
        method: 'GET'
      })
    }),
    editEmployee: builder.mutation<string, Employee>({
      query: employee => ({
        url: `/employees/edit/${employee.id}`,
        method: 'PUT'
      })
    }),
    removeEmployee: builder.mutation<string, Employee>({
      query: id => ({
        url: `/employees/remove/${id}`,
        method: 'DELETE',
        body: { id }
      })
    }),
    addEmployee: builder.mutation<string, Employee>({
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
