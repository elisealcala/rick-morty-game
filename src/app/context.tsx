'use client';
 
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { GetCharactersQuery } from '../../generated';
 
export const Context = createContext<{
  cards: NonNullable<GetCharactersQuery['characters']>['results'],
  setCards: Dispatch<SetStateAction<NonNullable<GetCharactersQuery['characters']>['results']>>,
  turnsContext: number,
  setTurnsContext: Dispatch<SetStateAction<number>>
}>({
  cards: [],
  setCards: () => null,
  turnsContext: 0,
  setTurnsContext: () => null,
});
 
export default function ContextProvider({ children }:{
  children: React.ReactNode
}) {
  const [cards, setCards] = useState<NonNullable<GetCharactersQuery['characters']>['results']>([])
  const [turnsContext, setTurnsContext] = useState(0)

  return (
    <Context.Provider
      value={{cards, setCards, turnsContext, setTurnsContext}}
    >
    {children}
    </Context.Provider>
  );
}