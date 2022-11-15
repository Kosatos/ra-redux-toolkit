import React from 'react'
import { useAppSelector } from '../../app/hooks'
import Photo from './Photo'

export default function PhotoList() {
  const { files } = useAppSelector((state) => state)

  if (!files.length) return null
  return (
    <ul className='flex gap-4 flex-wrap'>
      {files.map((file, idx) => (
        <Photo src={file} key={idx}></Photo>
      ))}
    </ul>
  )
}
