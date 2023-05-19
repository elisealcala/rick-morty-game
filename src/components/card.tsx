import { FC } from 'react';
import Image from 'next/image';
import { GetCharactersQuery } from '../../generated';

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
		? 'bg-[#A2F2F9] cursor-pointer flex items-center'
		: 'bg-white';

	return (
		<div
			onClick={!blocked && flipped ? onClick : () => null}
			className={`w-full p-4 h-[260px] rounded-[8px] shadow-md ${className}`}
			data-testid="container"
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
							data-testid="image"
						/>
					</div>
					<h2 className="mt-2 font-bold leading-[1.1]" data-testid="name">
						{name}
					</h2>
					<p className="mt-1 text-[10px]" data-testid="status">
						{status} - {species}
					</p>
				</>
			)}
		</div>
	);
};
