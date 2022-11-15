import React from 'react'

type PhotoProps = {
  src: string
}

export default function Photo({ src }: PhotoProps) {
  return (
    <li className='w-[200px] h-[200px] rounded-md shadow-md'>
      <img
        className='w-full h-full object-cover rounded-md'
        src={src}
        alt='avatar'
      />
    </li>
  )
}
