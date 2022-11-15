import React from 'react'

type FactProps = {
  fact: string
}

export default function Fact({ fact }: FactProps) {
  return (
    <li className='p-4 border-2 border-gray-50 rounded-md shadow-md'>
      <p className='text-xl font-medium'>{fact}</p>
    </li>
  )
}
