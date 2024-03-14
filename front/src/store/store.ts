import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit'
import { listenerMiddleware } from '../middleware/authMiddleware'
import auth from '../features/auth/authSlice'
import { api } from '../services/api'

export const store = configureStore({
  reducer: {
    auth,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
