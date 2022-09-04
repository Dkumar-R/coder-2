import { useState } from 'react'
import * as fs from 'fs';
// import { useRouter } from 'next/router'


const Slag = (props) => {
    const [Blogs, setBlog] = useState(props.MyBlog)
  return (
    <div className='mt-20'>
       <div className='ring-1 ring-indigo-500  m-4 max-w-4xl mx-auto rounded-md'>
              <h3 className=' pt-16 text-center text-indigo-500 text-6xl font-bold underline px-5'>{Blogs && Blogs.title}</h3>
              <hr className='border-indigo-500 mt-10'/>
              <div className='flex justify-between mx-20 mt-5'>
                <span className='text-base font-medium text-slate-600'>Aother: {Blogs && Blogs.aother}</span>
                <span className='text-base font-medium text-slate-600'>Date: {Blogs && Blogs.date}</span>
              </div>
              <hr className='border-indigo-500 mt-5'/>
              <p className='pt-20 px-5 pb-5 text-slate-600 text-xl text-center'>{Blogs && Blogs.content}</p>
            </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slag: 'How-to-leran-javascript'} },
      { params: { slag: 'How-to-learn-CSS-2022'} },
      { params: { slag: 'C-is-one-of-the-world'} },
    ],
    fallback: true
  };
}

export async function getStaticProps(context) {
  // console.log(context)
  const { slag } = context.params;
  let MyBlog = await fs.promises.readFile(`BlogData/${slag}.json`,'utf-8')

  return {
    props: {MyBlog: JSON.parse(MyBlog)},
  }
}

export default Slag;
