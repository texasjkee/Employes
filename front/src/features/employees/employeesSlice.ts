import { createSlice } from '@reduxjs/toolkit'
import { Employee } from '../../services/'
import { employeesApi } from '../../services/employees'
import { RootState } from '../../store/store'

interface InitialState {
  employees: Employee[] | null
}

const initialState: InitialState = {
  employees: null
}

const slice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    logout: () => initialState
  },
  extraReducers: builder => {
    builder.addMatcher(employeesApi.endpoints.getAllEmployees.matchFulfilled, (state, action) => {
      state.employees = action.payload
    })
  }
})

export default slice.reducer

export const selectEmployes = (state: RootState) => state.employees
