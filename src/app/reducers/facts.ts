import { createReducer } from '@reduxjs/toolkit'
import { changeQuantity } from '../actions/facts'

interface factsState {
  items: string[]
  quantity: number
}

const initialState: factsState = {
  items: [
    'Прообразом Чубакки стал пёс режиссёра',
    'Актёрам разрешили подобрать любимый цвет для своих световых мечей',
    'В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
    'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к акваланг',
    'Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок',
  ],
  quantity: 1,
}

export const factsReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeQuantity, (state, { payload }) => {
    state.quantity = payload
  })
})
