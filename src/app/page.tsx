import { GetCharactersDocument, GetCharactersQuery } from "../../generated"
import { getClient } from "../../apollo.config"
import { MainScreen } from "@/screens/main"

type CharactersParam = NonNullable<NonNullable<GetCharactersQuery['characters']>['results']>

const formatData = (characters: CharactersParam) => {
  const firstSixSorted = characters.sort(() => Math.random() - 0.5).filter((_, i) => i < 6)

  const pairFormatted = firstSixSorted.reduce((init, val) => {
    return [...init, val, val]
  }, [] as CharactersParam)

  return pairFormatted
}

export default async function Home() {
  const { data } = await getClient().query<GetCharactersQuery>({query: GetCharactersDocument})

  const formattedData = data.characters?.results
    ? formatData([...data.characters.results])
    : data.characters?.results ?? []


  return (
    <MainScreen characters={formattedData} />
  )
}
