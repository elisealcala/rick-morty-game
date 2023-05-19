'use client';

import { useContext, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { Context } from '../context';
import { Card } from '@/components/card';
import { GetCharactersDocument, GetCharactersQuery } from '../../../generated';
import { formatData } from '@/utils';

type CardOption = {
	customId: string;
	id: string;
};

export default function Play() {
	const [allHidden, setAllHidden] = useState(false);
	const [isBlocked, setIsBlocked] = useState(false);
	const [selectedCards, setSelectedCards] = useState<CardOption[]>([]);
	const [matchingCards, setMatchingCards] = useState<CardOption[]>([]);
	const [turns, setTurns] = useState(0);
	const [hits, setHits] = useState(0);
	const { cards, setTurnsContext, setCards } = useContext(Context);
	const [getCharacters, { loading, data }] = useLazyQuery<GetCharactersQuery>(
		GetCharactersDocument
	);

	const router = useRouter();

	useEffect(() => {
		if (cards?.length) {
			setTimeout(() => {
				setAllHidden(true);
			}, 3000);
		} else {
			getCharacters();
		}
	}, [cards, getCharacters]);

	useEffect(() => {
		if (data?.characters?.results) {
			setCards(
				formatData([...data.characters.results]).sort(() => Math.random() - 0.5)
			);
		}
	}, [data, setCards]);

	useEffect(() => {
		if (selectedCards.length === 2) {
			setIsBlocked(true);
			setTurns((turns) => turns + 1);

			if (selectedCards[0].id === selectedCards[1].id) {
				setHits((hit) => hit + 1);
				setTimeout(() => {
					setMatchingCards((cards) => [...cards, ...selectedCards]);
					setSelectedCards([]);
					setIsBlocked(false);
				}, 1000);
			} else {
				setTimeout(() => {
					setSelectedCards([]);
					setIsBlocked(false);
				}, 1000);
			}
		}
	}, [selectedCards]);

	useEffect(() => {
		if (matchingCards.length === 12) {
			setTurnsContext(turns);
			router.push('/congrats');
		}
	}, [matchingCards, router, turns, setTurnsContext]);

	const handleClick = ({ customId, id }: CardOption) => {
		if (!selectedCards.some(({ customId }) => customId === id)) {
			setSelectedCards([...selectedCards, { customId, id }]);
		}
	};

	return (
		<main className="flex flex-col items-center">
			<section className="md:w-[1040px] bg-[#FFFAC2] rounded mt-8 py-10 px-16">
				<div className="flex justify-between">
					<p>{`Aciertos: ${hits}`}</p>
					<p>{`Turnos: ${turns}`}</p>
				</div>
				<div className="grid grid-cols-4 gap-4 mt-10">
					{loading || cards.length === 0
						? Array.from(Array(12).keys()).map((i) => (
								<div
									key={i}
									className="animate-pulse h-[260px] w-full bg-slate-200"
								/>
						  ))
						: cards.map((character, index) => {
								const newId = `${character?.name}-${index}`;
								const isAMatchingCard = matchingCards.some(
									({ customId }) => customId === newId
								);
								const isASelectedCard = selectedCards.some(
									({ customId }) => customId === newId
								);

								if (isAMatchingCard) {
									return (
										<div key={newId} className="h-[260px] w-full bg-gray-100" />
									);
								}

								return (
									<div key={newId}>
										<Card
											{...character}
											flipped={allHidden && !isASelectedCard}
											onClick={() => {
												handleClick({
													customId: newId,
													id: character?.id ?? '',
												});
											}}
											blocked={isBlocked}
										/>
									</div>
								);
						  })}
				</div>
			</section>
		</main>
	);
}
