import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='w-full min-h-[400px]  flex flex-col items-center gap-8'>
        <div className='w-full h-[235px] sm:h-[500px]'>
            <Image src='/BannerImg.png' alt='bannerIMg' width={200} height={200} className='w-full h-full object-fill'></Image>
        </div>
        <div className='w-full flex flex-col items-center gap-4 px-2 '>
           <p className='font-blod text-4xl text-center  leading-normal w-[70% !break-normal'>A few words about this blog platform, Ghost, and how this site was made</p> 
           <p className='w-[60%] text-center font-light text-base leading-relaxed tracking-widest !break-normal'>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
        </div>
    </div>
  )
}

export default Banner