import { createAction } from '@reduxjs/toolkit'

export const changeQuantity = createAction<number, 'CHANGE_QUANTITY'>(
  'CHANGE_QUANTITY'
)
