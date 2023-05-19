import { FC } from 'react';

type ButtonProps = {
	variant?: 'primary' | 'secondary';
	text: string;
};

export const Button: FC<ButtonProps> = ({ variant = 'primary', text }) => {
	const className =
		variant === 'primary'
			? 'bg-[#A2F2F9] border-[#D8E054] '
			: 'bg-[#D8E054] border-[#A2F2F9]';

	return (
		<button
			className={`${className} border-b-4 border-l-4 px-[80px] py-3 rounded-[8px] font-semibold capitalize text-[24px] leading-[29px] text-center`}
		>
			{text}
		</button>
	);
};
