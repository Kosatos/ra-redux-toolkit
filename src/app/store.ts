import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { factsReducer } from './reducers/facts'
import filesReduser from './reducers/filesSlice'

export const store = configureStore({
  reducer: {
    facts: factsReducer,
    files: filesReduser,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
