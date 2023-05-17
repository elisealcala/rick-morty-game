import { GetCharactersDocument, GetCharactersQuery } from "../../generated"
import { getClient } from "../../apollo.config"
import { Header } from "@/components/header"
import { Card } from "@/components/card"

export default async function Home() {
  const { data } = await getClient().query<GetCharactersQuery>({query: GetCharactersDocument})

  console.log({ data })

  return (
    <main className="min-h-screen bg-[#1C1D3B] flex flex-col items-center">
      <Header />
      <section className="md:w-[1040px] bg-[#FFFAC2] rounded mt-8 py-10 px-16">
        <h2>Personajes</h2>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {data.characters?.results?.map(character => (
            <div key={character?.id}>
              <Card key={character?.id} {...character} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
