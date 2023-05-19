import Image from 'next/image';

export const Header = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="relative w-[300px] h-[100px] sm:w-[500px] sm:h-[200px]">
				<Image
					src="/logo-rick-morty.png"
					alt="logo header"
					fill
					sizes="500px, 200px"
				/>
			</div>
			<button className="mt-4 bg-[#D8E054] rounded-full py-2 px-4 text-[20px] leading-[24px] font-bold">
				Juego de memoria
			</button>
		</div>
	);
};
