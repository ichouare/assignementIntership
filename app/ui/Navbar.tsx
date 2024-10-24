import React from 'react'
import Links from './Links'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-white w-full sticky max-w-full h-16  px-3  flex items-center  justify-between gap-4  '>
      <div className='w-[200px] '>
       <Link    href='/' className='text-2xl  object-contain uppercase -tracking-tighter'>medium 1337</Link >
      </div>
      <div>

     <Links/>
      </div>
         </div>
  )
}

export default Navbar