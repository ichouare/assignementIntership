import React from 'react'
import Banner from '../../ui/Banner'
import AllArticles from '../../ui/allArticles'
const Home = () => {
  // add promise 

  // call fetchData when component mounts

  return (
    <section className=' w-full min-h-screen flex flex-col items-center gap-8 '>
      <AllArticles />
    </section>
  )
}

export default Home