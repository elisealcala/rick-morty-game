import { FC } from 'react';
import Image from 'next/image';
import { Character, GetCharactersQuery } from '../../generated';

type CardProps = NonNullable<
	NonNullable<NonNullable<GetCharactersQuery['characters']>['results']>[number]
> & {
	blocked?: boolean;
	flipped?: boolean;
	onClick?: () => void;
};

export const Card: FC<CardProps> = ({
	image,
	name,
	status,
	species,
	blocked,
	flipped,
	onClick,
}) => {
	const className = flipped
		? 'bg-[#A2F2F9] cursor-pointer h-[260px] flex items-center'
		: 'bg-white';

	return (
		<div
			onClick={!blocked && flipped ? onClick : () => null}
			className={`w-full h-full p-4 rounded ${className}`}
		>
			{flipped ? (
				<div className="relative w-full h-[180px]">
					<Image
						fill
						src={'/ricky_morty_img.png'}
						alt="rick_morty"
						className="rounded"
						sizes="180px, 180px"
					/>
				</div>
			) : (
				<>
					<div className="relative w-full h-[180px]">
						<Image
							fill
							src={image ?? ''}
							alt={name ?? ''}
							className="rounded"
							sizes="180px, 180px"
						/>
					</div>
					<h2 className="mt-2 font-bold leading-[1.1]">{name}</h2>
					<p className="mt-1 text-[10px]">
						{status} - {species}
					</p>
				</>
			)}
		</div>
	);
};
