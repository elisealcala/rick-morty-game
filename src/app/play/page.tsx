"use client"

import { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import { Card } from '@/components/card'

type CardOption = {
  customId: string
  id: string
}

export default function Play() {
  const [allHidden, setAllHidden] = useState(false)
  const [isBlocked, setIsBlocked] = useState(false)
  const [selectedCards, setSelectedCards] = useState<CardOption[]>([])
  const [matchingCards, setMatchingCards] = useState<CardOption[]>([])
  const [turns, setTurns] = useState(0)
  const [hits, setHits] = useState(0)
  const { cards } = useContext(Context)

  useEffect(() => {
    setTimeout(() => {
      setAllHidden(true)
    }, 3000)
  }, [])

  useEffect(() => {
    if (selectedCards.length === 2) {
      setIsBlocked(true)
      setTurns((turns) => turns + 1)

      if (selectedCards[0].id === selectedCards[1].id) {
        setHits((hit) => hit +1)
        setTimeout(() => {
          setMatchingCards((cards) => [...cards, ...selectedCards])
          setSelectedCards([])
          setIsBlocked(false)
        }, 1000)
      } else {
        setTimeout(() => {
          setSelectedCards([])
          setIsBlocked(false)
        }, 1000)
      }
    }
    
  }, [selectedCards])

  const handleClick = ({ customId, id }: CardOption) => {
    if (!selectedCards.some(({ customId }) => customId === id)) {
      setSelectedCards([...selectedCards, { customId, id }])
    }
  }

  return (
    <main className="flex flex-col items-center">
      <section className="md:w-[1040px] bg-[#FFFAC2] rounded mt-8 py-10 px-16">
        <div className="flex justify-between">
          <p>{`Aciertos: ${hits}`}</p>
          <p>{`Turnos: ${turns}`}</p>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {cards?.map((character, index) => {
            const newId = `${character?.name}-${index}`
            const isAMatchingCard = matchingCards.some(({ customId }) => customId === newId)
            const isASelectedCard = selectedCards.some(({ customId }) => customId === newId)

            if (isAMatchingCard) {
              return (
                <div key={newId} className='h-[260px] w-full bg-gray-100' />
              )
            }

            return (
              <div key={newId}>
                <Card
                  {...character}
                  flipped={allHidden && !isASelectedCard}
                  onClick={() => {
                    handleClick({
                      customId: newId,
                      id: character?.id ?? ''
                    })}
                  }
                  blocked={isBlocked}
                />
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}