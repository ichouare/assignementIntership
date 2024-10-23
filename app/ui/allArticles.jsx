import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'
import { IoIosCreate } from "react-icons/io";
import { Suspense } from 'react';


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ArticleSkeleton from './Skeletion/ArtilcesSkeleton';

const AllArticles = async () => {

    const response =  await fetch("http://localhost:3000/api/posts/", { cache: 'no-store' })
    const data = await response.json()
    console.log(data)

  return (
    <section className='w-full max-w-[640px] border-t-2 flex flex-col items-center   py-10  gap-8 '>
    <div className='w-full  flex gap-2 items-center justify-between px-5'>
        <h1 className='text-3xl font-bold tracking-wider'>All Articles</h1>
        <Link className='cursor-pointer' 
            href='/new-article'
        ><IoIosCreate  className='text-2xl'/></Link>
    </div>
        <section className='grid grid-col-1 sm:grid-cols-2  place-content-center px-4 gap-4'>

        {
            data?.message?.map((item) => (
                <Suspense fallback={<ArticleSkeleton/>}>
                <Link href={`/Blog/${item.id}`} key={item.id} className='cursor-pointer'>
                <article  className='flex  w-[304px] h-[300px] min-h-[300px] flex-col items-center gap-4 px-4 cursor-pointer '>
                <Avatar className="w-[304px] h-[176px]   !rounded-none ">
                <AvatarImage src={`${item.img}`} className='object-contain !rounded-none' />
                <AvatarFallback className='rounded-none' >CN</AvatarFallback>
                </Avatar>
                <p className='font-normal   text-xl  w-[100%] h-auto text-wrap text-center'>{item.title}</p>
                </article>
                </Link>
                </Suspense>
            ))  // end of map function  // end of return statement  // end of AllArticles component  // end of main function  // end of jsx code  // end of file  // end of document  // end of html document  // end of body document  // end of html document  // end of head document  // end of html document  // end of document  // end of html document  // end of body document  // end of html document  // end of head document  // end of html document
        }
        </section>
    </section>
  )
}

export default AllArticles