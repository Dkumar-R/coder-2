import { useState } from "react"
import React from 'react'



const Contect = () => {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [phone, setphone] = useState()
  const [password, setPassword] = useState()
  const HandleSumit = (e)=>{
    e.preventDefault()
    const data = {name, email, phone, password};
    fetch('http://localhost:3000/api/postContect/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
      // console.log('Success:', data);
      // alert("Thanks for contacting us");
      setemail('')
      setname('')
      setphone('')
      setPassword('')
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}
  const handleChange = (elment)=>{
    // console.log(e, "change")
    if (elment.target.name == 'name') {
      setname(elment.target.value)
    }
    if (elment.target.name == 'email') {
      setemail(elment.target.value)
    }
    if (elment.target.name == 'phone') {
      setphone(elment.target.value)
    }
    if (elment.target.name == 'password') {
      setPassword(elment.target.value)
    }
  }

  return (
    <div className=''>
      <div className='max-w-7xl mx-auto'>
        <div className='m-36'>
            <form onSubmit={HandleSumit} className='flex flex-col ring-1 p-10 rounded-lg ring-slate-300 shadow-xl '>
              <h4 className='text-3xl font-semibold text-center mb-10 text-indigo-500 underline'>Contect</h4>
              <input type="text" value={name}  id="name" name='name' onChange={handleChange} placeholder='Name:' className='border-2 border-slate-200 focus:outline-none focus:border-indigo-500 p-1 rounded-md font-medium text-base bg-slate-200 focus:bg-white placeholder:text-black my-3'/>
                <input type="email" value={email} name='email' id="email"  onChange={handleChange} placeholder='Email:' className='border-2 border-slate-200 focus:outline-none focus:border-indigo-500 p-1 rounded-md font-medium text-base bg-slate-200 focus:bg-white placeholder:text-black my-3'/>
                <input type="password" value={password} name="password" id="password" placeholder='Password:' onChange={handleChange} className='border-2 border-slate-200 focus:outline-none focus:border-indigo-500 p-1 rounded-md font-medium text-base bg-slate-200 focus:bg-white placeholder:text-black my-3'/>
                <input type="phone" value={phone} onChange={handleChange} name='phone' id="phone" placeholder='Phone No.' className='border-2 border-slate-200 focus:outline-none focus:border-indigo-500 p-1 rounded-md font-medium text-base bg-slate-200 focus:bg-white placeholder:text-black my-3' />
                <button type="submit" className='mt-20 mx-auto font-medium rounded-md px-10 py-3 bg-indigo-500 text-white shadow-lg shadow-indigo-400'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contect
