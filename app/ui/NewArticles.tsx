import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'
import { IoIosCreate } from "react-icons/io";
import Image  from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
 type propsType = {
    id: number,
    img: string,
    title: string,
    content: string,
    create_at: Date
 }

const NewArticle = async ({ data } : { data: propsType[] }) => {

 

  return (
    <section className='w-full max-w-[640px] min-h-[300px] border-t-2 flex flex-col items-center   py-10  gap-8 relative '>
        <Image src='/look.png' width={25} height={25} alt='look' className="absolute  -top-5 w-[50px] " />
    <div className='w-full  flex gap-2 items-center justify-center px-5'>
        <h1 className='text-3xl font-bold tracking-wider'>What to read next</h1>
        
    </div>
        <section className='grid grid-col-1 sm:grid-cols-2  place-content-center gap-4'>

        {
            data?.map((item : propsType) => (
                <Link href={`/Blog/${item.id}`} key={item.id} className='cursor-pointer'>
                <article key={item.id} className='flex  w-[304px] h-[300px] min-h-[300px] flex-col items-center gap-4 px-4 cursor-pointer '>
                <Avatar className="w-[304px] h-[176px] rounded-none *:">
                <Image src={`${item.img}`}  width={100} height={100} alt='article_img' className='w-full h-full object-contain  !rounded-none' />
                <AvatarFallback className='rounded-none'>CN</AvatarFallback>
                </Avatar>
                <p className='font-normal   text-xl  w-[80%] h-auto text-wrap text-center '>{item.title}</p>
                </article>
                </Link>
            ))  // end of map function  // end of return statement  // end of AllArticles component  // end of main function  // end of jsx code  // end of file  // end of document  // end of html document  // end of body document  // end of html document  // end of head document  // end of html document  // end of document  // end of html document  // end of body document  // end of html document  // end of head document  // end of html document
        }
        </section>
    </section>
  )
}

export default NewArticle