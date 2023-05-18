"use client"

import { FC } from 'react'
import { Header } from "@/components/header"
import { Card } from "@/components/card"
import { GetCharactersQuery } from '../../generated'

type MainProps = {
  characters: NonNullable<GetCharactersQuery['characters']>['results']
}

export const MainScreen: FC<MainProps> = ({ characters }) => {


  return (
    <main className="min-h-screen bg-[#1C1D3B] flex flex-col items-center">
      <Header />
      <section className="md:w-[1040px] bg-[#FFFAC2] rounded mt-8 py-10 px-16">
        <h2>Personajes</h2>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {characters?.map((character, index) => (
            <div key={`${character?.id}-${index}`}>
              <Card {...character} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
