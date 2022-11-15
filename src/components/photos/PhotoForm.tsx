import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { chooseFiles } from '../../app/reducers/filesSlice'
import { fileToDataUrl } from '../../utils/fileToDataUrl'

export default function PhotoForm() {
  const dispatch = useAppDispatch()
  const changeHandler = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      const file = await fileToDataUrl(evt.target.files[0])
      dispatch(chooseFiles(file))
    }
  }
  return (
    <div className='py-4'>
      <input
        className='py-2 px-4 border-2 border-gray-200'
        type='file'
        onChange={changeHandler}
      />
    </div>
  )
}
