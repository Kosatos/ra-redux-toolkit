import React from 'react'
import FactForm from './components/facts/FactForm'
import FactsList from './components/facts/FactsList'
import PhotoForm from './components/photos/PhotoForm'
import PhotoList from './components/photos/PhotoList'

function App() {
  return (
    <div className='container max-w-[991px] px-4 mx-auto'>
      <h2 className='py-4 text-2xl font-bold text-center uppercase'>Факты</h2>
      <hr />

      <div className='py-4'>
        <FactForm></FactForm>
        <FactsList></FactsList>
      </div>

      <h2 className='py-4 text-2xl font-bold text-center uppercase'>Фото</h2>
      <hr />
      <div className='py-4'>
        <PhotoList></PhotoList>
        <PhotoForm></PhotoForm>
      </div>
    </div>
  )
}

export default App
