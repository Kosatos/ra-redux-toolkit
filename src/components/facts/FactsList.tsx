import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import Fact from './Fact'

export default function FactsList() {
  const { items, quantity } = useAppSelector((state) => state.facts)
  const [facts, setFacts] = useState<string[]>(items.slice(quantity - 1))

  useEffect(() => {
    setFacts((prev) => items.slice(quantity - 1))
  }, [quantity, items])

  if (!items.length) return null
  return (
    <ul className='flex flex-col gap-4'>
      {facts.map((fact, idx) => (
        <Fact fact={fact} key={idx}></Fact>
      ))}
    </ul>
  )
}
