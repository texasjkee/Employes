import { createSlice } from '@reduxjs/toolkit'
import { IEmployee } from '../../services/'
import { employeesApi } from '../../services/employees'
import { RootState } from '../../store/store'

interface InitialState {
  employees: IEmployee[] | null
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
