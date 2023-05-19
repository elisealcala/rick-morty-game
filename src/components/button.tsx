import { FC } from "react";

type ButtonProps = {
  variant?: 'primary' | 'secondary',
  text: string
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', text }) => {
  const className = variant === 'primary' ? 'bg-[#A2F2F9]' : 'bg-[#D8E054]';

  return (
    <button className={`${className} p-4`}>
      {text}
    </button>
  )
}