import React from 'react'
import EditArticle from '@/app/ui/ediitArticles'
const EditPage = async ({params} : { params : {BlogId : string} }) => {
    const {BlogId} = params
    console.log(BlogId)
    const response =  await fetch(`http://localhost:3000/api/posts/${BlogId}/`,  { cache: 'no-store' })
    const data = await response.json()
    const {id, title, img , content} = data?.message[0]
  return (
    <div>
        <EditArticle id={id} content={content} img={img} title={title} />
    </div>
  )
}

export default EditPage