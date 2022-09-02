// import React from 'react'
import { data } from 'autoprefixer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Slag = (props) => {
    const [Blogs, setBlog] = useState(props.MyBlog)
  return (
    <div className='mt-20'>
       <div className='ring-1 p-3 m-4 max-w-4xl mx-auto rounded-md'>
              <h3 className=' pt-16 text-center text-indigo-500 text-6xl font-bold underline'>{Blogs && Blogs.title}</h3>
              <p className='pt-20 px-5 pb-5 text-slate-600 text-xl text-center'>{Blogs && Blogs.content}</p>
            </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  // console.log(context)
  const { slag } = context.query;
  let data = await fetch(`http://localhost:3000/api/getBlog?slag=${slag}`)
  let MyBlog = await data.json()
  return {
    props: {MyBlog}, // will be passed to the page component as props
  }
}

export default Slag;
