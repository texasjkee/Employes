import { IUser } from './index'
import { api } from './api'

export type UserData = Omit<IUser, 'id'>
type ResponseLoginData = IUser & { token: string }

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ResponseLoginData, UserData>({
      query: userData => ({
        url: '/user/login',
        method: 'POST',
        body: userData
      })
    }),
    register: builder.mutation<ResponseLoginData, UserData>({
      query: userData => ({
        url: '/user/register',
        method: 'POST',
        body: userData
      })
    }),
    current: builder.query<ResponseLoginData, void>({
      query: () => ({
        url: '/user/current',
        method: 'GET'
      })
    })
  })
})

export const { useLoginMutation, useRegisterMutation, useCurrentQuery } = authApi
export const {
  endpoints: { login, register, current }
} = authApi
