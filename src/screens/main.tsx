"use client"

import { FC, useContext } from 'react'
import { Card } from "@/components/card"
import { GetCharactersQuery } from '../../generated'
import { Button } from '@/components/button'
import { Context } from '@/app/context'
import Link from 'next/link'

type MainProps = {
  characters: NonNullable<GetCharactersQuery['characters']>['results']
}

export const MainScreen: FC<MainProps> = ({ characters }) => {
  const { setCards } = useContext(Context)
  
  return (
    <main className="flex flex-col items-center">
      <section className="md:w-[1040px] bg-[#FFFAC2] rounded mt-8 py-10 px-16">
        <h2>Personajes</h2>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {characters?.map((character, index) => (
            <div key={`${character?.id}-${index}`}>
              <Card {...character} />
            </div>
          ))}
        </div>
        <Link
          href="/play"
          onClick={() => {
            setCards(characters ? characters.sort(() => Math.random() - 0.5) : characters)
          }}
        >
          <Button text="jugar" />
        </Link>
      </section>
    </main>
  )
}
