'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { GetCharactersQuery } from '../../generated';
import { CharactersParam } from '@/utils';

export const Context = createContext<{
	cards: CharactersParam;
	setCards: Dispatch<CharactersParam>;
	turnsContext: number;
	setTurnsContext: Dispatch<SetStateAction<number>>;
}>({
	cards: [],
	setCards: () => null,
	turnsContext: 0,
	setTurnsContext: () => null,
});

export default function ContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [cards, setCards] = useState<CharactersParam>([]);
	const [turnsContext, setTurnsContext] = useState(0);

	return (
		<Context.Provider
			value={{ cards, setCards, turnsContext, setTurnsContext }}
		>
			{children}
		</Context.Provider>
	);
}
