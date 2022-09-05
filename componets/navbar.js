import React from 'react'
import Link from 'next/link'
export default function navbar() {
  return (
     <nav className=''>
        <div >
          <div className=' mx-auto '>
            <div className='border-b-2  NavBoder  shadow-lg shadow-slate-300 py-5 bg-gradient-to-r from-cyan-500 to-indigo-500 max-w-4xl mx-auto'>
            <ul className='flex space-x-10 font-semibold justify-center'>
              <li className='cursor-pointer text-stone-50 hover:text-white hover:underline'><Link href="/"><a>Home</a></Link></li>
              <li className='cursor-pointer text-stone-50 hover:text-white hover:underline'><Link href="blog"><a>Blog</a></Link></li>
              <Link href= "/contect"><a><li className='cursor-pointer text-stone-50 hover:text-white hover:underline'>Contect</li></a></Link>
              <li><Link href="/about"><a className='cursor-pointer text-stone-50 hover:text-white hover:underline'>About</a></Link></li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}
