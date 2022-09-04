import Link from 'next/link'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import * as fs from 'fs';


const Blog = (props) => {
  // console.log(props)
  const [Blogs, setBlogs] = useState(props.allBlog);


  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Read and Eren Knowlage" />
      </Head>

      <div>
        <div className='mt-28'>
          <div className=' justify-center items-center flex-wrap 2xl:mx-72 xl:mx-64 md:mx-56'>
            {Blogs.map((BlogItem) => {
               return <div key={BlogItem.slag}>
                <Link href={`./Blogpost/${BlogItem.slag}`}>
                <div className='ring-1 rounded-lg ring-slate-300 hover:ring-indigo-500 group cursor-pointer p-5 mx-5 mt-5 h-40 max-w-7xl'>
                  <div className='flex justify-between items-center'>
                  <h3 className='text-left font-semibold text-xl group-hover:text-indigo-500'>{BlogItem.title}</h3>
                  <span className='text-red-500 font-medium text-sm '>Date: {BlogItem.date}</span>
                  </div>
                  <p className='font-medium text-left pt-6 group-hover:text-indigo-500 text-slate-500'>{BlogItem.content.substr(0,180)}...</p>
                </div></Link>
             </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("BlogData")
  let myFile;
  let allBlog = [];
  for (let index = 0; index < data.length; index++) {
      const item = data[index];
      myFile = await fs.promises.readFile(('BlogData/' + item), 'utf-8')
      allBlog.push(JSON.parse(myFile))
      // Print Console
      // console.log(myFile)
  }
  return {
    props: {allBlog}, // will be passed to the page component as props
  }
}

export default Blog
