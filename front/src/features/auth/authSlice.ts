import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { authApi } from 'services/auth'
import { User } from '@sevices/'

interface InitialState {
  user: (User & { token: string }) | null
  isAuthenticated: boolean
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false
}

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
    })
    builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
    })
    builder.addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
    })
  }
})

export const { logout } = userSlice.actions
export default userSlice.reducer

export const selectIsAunthenticated = (state: RootState) => state.auth.isAuthenticated

export const selectUser = (state: RootState) => state.auth.user
