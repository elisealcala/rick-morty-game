'use client';

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { GetCharactersDocument, GetCharactersQuery } from '../../generated';
import { useContext } from 'react';
import { Context } from './context';
import { formatData } from '@/utils';
import { Card } from '@/components/card';
import Link from 'next/link';
import { Button } from '@/components/button';

export default function Home() {
	const { data, loading } = useQuery<GetCharactersQuery>(GetCharactersDocument);
	const { setCards } = useContext(Context);

	const formattedData = data?.characters?.results
		? formatData([...data.characters.results])
		: data?.characters?.results ?? [];

	return (
		<main className="flex flex-col items-center">
			<section className="md:w-[1040px] bg-[#FFFAC2] rounded mt-8 py-10 px-16 text-center">
				<h2 className="text-[24px] leading-[29px] font-bold">Personajes</h2>
				<div className="grid grid-cols-4 gap-4 mt-[24px] mb-[48px]">
					{loading
						? Array.from(Array(12).keys()).map((i) => (
								<div
									key={i}
									className="animate-pulse h-[260px] w-full bg-slate-200"
								/>
						  ))
						: formattedData?.map((character, index) => (
								<div key={`${character?.id}-${index}`}>
									<Card {...character} />
								</div>
						  ))}
				</div>
				<Link
					href="/play"
					scroll={false}
					onClick={() => {
						if (formattedData) {
							setCards(formattedData.sort(() => Math.random() - 0.5));
						}
					}}
				>
					<Button text="jugar" />
				</Link>
			</section>
		</main>
	);
}
