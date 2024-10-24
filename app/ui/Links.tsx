"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const Links = () => {
    const pathName = usePathname()
    console.log(pathName)
  if (pathName != '/') {
      return (
        <Link href='/'  className='text-2xl w-full h-full object-contain cursor-pointer'> / Home </Link>
      )

  }
}

export default Links