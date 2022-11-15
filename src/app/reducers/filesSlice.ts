import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: string[] = []

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    chooseFiles(state, action: PayloadAction<string>) {
      state.unshift(action.payload)
    },
  },
})

export default filesSlice.reducer
export const { chooseFiles } = filesSlice.actions
