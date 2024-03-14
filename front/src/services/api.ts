import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const URL = 'http://localhost:8000/api'

const baseQuery = fetchBaseQuery({
  baseUrl: URL
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({})
})
