"use client"

import { useContext } from "react"
import Link from 'next/link'
import { Context } from "../context"
import { Button } from "@/components/button"

export default function Congrats() {
  const { turnsContext }=  useContext(Context)

  return (
    <main className="flex flex-col items-center">
      <section className="md:w-[1040px] bg-[#FFFAC2] rounded mt-8 py-10 px-16">
        <div className="flex flex-col w-full items-center">
          <h2 className="font-bold text-[32px]">
            ¡Felicitaciones!
          </h2>
          <p className="mt-4 mb-10">
            {`Terminaste el juego con ${turnsContext} turnos`}
          </p>
          <div className="flex">
            <Link href="/play">
              <Button text="Repetir" />
            </Link>
            <Link href="/" className="ml-6">
              <Button text="Inicio" variant="secondary"/>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}