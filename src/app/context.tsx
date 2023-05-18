'use client';
 
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { GetCharactersQuery } from '../../generated';
 
export const Context = createContext<{
  cards: NonNullable<GetCharactersQuery['characters']>['results'],
  setCards: Dispatch<SetStateAction<NonNullable<GetCharactersQuery['characters']>['results']>>
}>({
  cards: [],
  setCards:  () => null
});
 
export default function ContextProvider({ children }:{
  children: React.ReactNode
}) {
  const [cards, setCards] = useState<NonNullable<GetCharactersQuery['characters']>['results']>([])

  return (
    <Context.Provider value={{ cards, setCards }}>
    {children}
    </Context.Provider>
  );
}