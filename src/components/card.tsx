import { FC } from 'react';
import Image from 'next/image';
import { Character, GetCharactersQuery } from '../../generated';

type CardProps = NonNullable<NonNullable<NonNullable<GetCharactersQuery['characters']>['results']>[number]>

export const Card: FC<CardProps> = ({ image, name, status, species }) => {
  return (
    <div className='w-full h-full bg-white p-4 rounded'>
      <div className='relative w-full h-[180px]'>
        <Image fill src={image ?? ''} alt={name ?? ''} className='rounded' />
      </div>
      <h2 className='mt-2 font-bold leading-[1.1]'>{name}</h2>
      <p className='mt-1 text-[10px]'>{status} - {species}</p>
    </div>
  )
}