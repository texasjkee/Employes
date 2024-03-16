import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'
import { User } from '../../services/'
import { authApi } from '../../services/auth'

interface InitialState {
  user: (User & { token: string }) | null
  isAuthenticated: boolean
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState
  },
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
      console.log(state.user)
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

export const { logout } = authSlice.actions
export default authSlice.reducer

export const selectIsAunthenticated = (state: RootState) => state.auth.isAuthenticated

export const selectUser = (state: RootState) => state.auth.user
