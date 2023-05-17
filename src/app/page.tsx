import { GetCharactersDocument } from "../../generated"
import { getClient } from "../../apollo.config"

export default async function Home() {
  const { data } = await getClient().query({query: GetCharactersDocument})

  console.log({ data })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      all the characters
    </main>
  )
}
