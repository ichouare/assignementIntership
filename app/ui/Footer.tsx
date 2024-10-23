import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full  flex  flex-col gap-2 items-center justify-between p-3  min-h-[50px] bg-black text-white '>
        <h1 className='text-base font-light tracking-wider'>&copy; {new Date().getFullYear() } ichouare  All rights reserved.</h1>
    </footer>
  )
}

export default Footer