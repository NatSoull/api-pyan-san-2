/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { MdEmail } from "react-icons/md"
import { Si1Password } from "react-icons/si"
import "./login.css"

const Login = () => {

  const [showPasswordToggle, setShowPasswordToggle] = useState(true)

  return (
    <div className=' login-body'>


      <Navbar />


      <form className=' mx-auto mt-20 px-14 py-14 login-card flex flex-col gap-14'>

        <h1 className=' font-bold text-4xl text-center mb-4'>Login</h1>

        <div className=' relative border-b-2 border-black py-2'>
          <MdEmail className=' absolute top-0 left-[100%] text-xl' />
          <input type="text" className='login-input w-[100%] bg-transparent outline-none' required />
          <label className='login-label absolute left-[2px] pointer-events-none text-xl'>Email</label>
        </div>

        <div className=' relative border-b-2 border-black py-2'>
          <Si1Password onClick={() => setShowPasswordToggle(!showPasswordToggle)} className=' absolute top-0 left-[100%] text-xl cursor-pointer' />
          <input type={`${showPasswordToggle ? `password` : `text`}`} className='login-input w-[100%] bg-transparent outline-none' required />
          <label className='login-label absolute left-[2px] pointer-events-none text-xl'>Password</label>
        </div>

        <div className=' flex justify-between items-center'>
          <div>
            <input className='checkbox mr-1' type="checkbox" id='rememberMyPassword' />
            <label htmlFor="rememberMyPassword" className=' select-none cursor-pointer'>Remember me</label>
          </div>
          <button className=' hover:underline' type='button'>Forgot Password</button>
        </div>

        <button className=' bg-slate-800 py-2 rounded-lg text' type='submit'>Login</button>

        <div className=' flex justify-between items-center'>
          <p>Dont have an account?</p>
          <button type='button'>Register</button>
        </div>
      </form>

    </div>
  )
}

export default Login
