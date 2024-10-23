import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-white  w-full max-w-full h-16  px-3  flex items-center  justify-between gap-4  '>
      <div className='w-[217px]  h-full  '>
       <Image src='/Logo.png'  alt='logo_img'  width={64} height={64} className='text-2xl w-full h-full object-contain'></Image>
      </div>
      <div className='flex items-center cursor-pointer'>
      <Link href='/'  className='text-2xl w-full h-full object-contain'> /Home </Link>
      </div>
    </div>
  )
}

export default Navbar