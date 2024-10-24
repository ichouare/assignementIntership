import React from 'react'
import NewArticles from '@/app/ui/NewArticles';


const NotFound = async () => {

        let posts = []; 
        try{
          const res = await fetch(`http://localhost:3000/api/posts/` ,  { cache: 'no-store' })
           posts = await res.json()
           console.log(posts)
          
        }catch (err) {
            posts = []
        }
     
  return (
    <section className='w-full flex flex-col gap-8 items-center'>
        <div className='w-full flex flex-col items-center gap-8'>
        <h1 className='text-6xl'>pos !!!!!</h1>
        <p className='text-2xl text-blue-600'>
        Not Fount Article
        </p>
        </div>
        <NewArticles  data={posts.message}/>
    </section>
  )
}

export default NotFound