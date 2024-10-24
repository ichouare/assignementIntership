

import ArticlesDetails from '@/app/ui/ArticlesDetails';
import NewArticles from '@/app/ui/NewArticles';
import React from 'react'
import { notFound } from 'next/navigation';


async function getDataofArticle(BlogId: string) {
  try{
    const data =  await fetch(`http://localhost:3000/api/posts/${BlogId}/` ,  { cache: 'no-store' });
    let post = await data.json()
    return post?.message[0]
  }
  catch(err){
    return [];
      
  }
}
 
async function getNewArticles(id : string) {
  try{
    const res = await fetch(`http://localhost:3000/api/NewArticles/${id}` ,  { cache: 'no-store' })
    let posts = await res.json()
    return posts?.message
  }catch (err) {
    return [];
  }
}


const BlogID =  async ({ params }: { params: { BlogId: string } }) => {
  const { BlogId } = params
  const articleData = getDataofArticle(BlogId)
  const NewArticleData = getNewArticles(BlogId)

  const [article, NewArticle] = await Promise.all([articleData, NewArticleData])
  if (!article) {
    notFound()
  }
  const {id, title, img , content, create_at} =  article
  return (
    <section className='w-full   grow min-h-[400px]    md:max-w-[640px]'>
       <ArticlesDetails id={id} title={title}  content={content} img={img} create_at={create_at} />
     <NewArticles  data={NewArticle}/>
    </section>
  )
}

export default BlogID