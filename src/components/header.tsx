import Image from 'next/image'

export const Header = () => {
  return (
    <div className='relative sm:w-[500px] sm:h-[200px]'>
      <Image src="/logo-rick-morty.png" alt="logo header" fill />
    </div>
  )
}