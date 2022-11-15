import React from 'react'
import { changeQuantity } from '../../app/actions/facts'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
export default function FactForm() {
  const { quantity } = useAppSelector((state) => state.facts)
  const dispatch = useAppDispatch()
  return (
    <div className='py-4'>
      <input
        className='py-2 px-4 w-40 border-2 border-gray-200'
        type='number'
        min={1}
        max={5}
        value={quantity}
        onChange={(evt) => dispatch(changeQuantity(+evt.target.value))}
      />
    </div>
  )
}
