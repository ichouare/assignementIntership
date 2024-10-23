"use client"
import Link from 'next/link'
import React, {useRef, useEffect } from 'react'
import { useFormState } from 'react-dom'
import {Loginser} from './actions/LoginAction'
import { redirect } from 'next/navigation'
import RegisterAction from './actions/RegitserAction'
const RegisterFrom = () => {
    const initialState = {
      message: '',
    }
    const  [state, formAction] = useFormState(RegisterAction, initialState)
    const ref = useRef(null)
    useEffect(() => {

        console.log('Register', state);
    }, [state])
  return (
    <form  ref={ref}  className='w-full gap-6  max-w-[640px]   grid grid-flow-row py-10 capitalize  tracking-wider ' action={async (formData) => {
        ref.current.reset()
        const status = await formAction(formData)
        console.log(status)
        }}>
      <div className='flex flex-col gap-2 h-16  '>
      <label className='text-[#181818] text-base font-medium ' htmlFor='username'>username</label>
      <input type='username'  name="username" id="username" placeholder='enter your username' className='h-10 shadow rounded-xl p-4 py-5  border border-black/25  placeholder:capitalize placeholder:text-[14px] outline-none ' />
      </div>
      <div className='flex flex-col gap-2 h-16  '>
      <label className='text-[#181818] text-base font-medium ' htmlFor='email'>Email</label>
      <input type='email'  name="email" id="email" placeholder='enter your Email' className='h-10 shadow rounded-xl p-4 py-5  border border-black/25  placeholder:capitalize placeholder:text-[14px] outline-none ' />
      </div>
      <div className='flex flex-col gap-2 h-16'>
      <label className='' htmlFor='Password'>Password</label>
      <input type='password' name="password" id="password" placeholder='' className='h-10 shadow rounded-xl p-2  border border-black/25  placeholder:capitalize placeholder:text-[14px] outline-none ' />
      </div>
      <button className='h-10 w-full bg-[#EA454C] shadow text-white text-center rounded-[12px] py-2  text-base font-medium  capitalize ' type='sumbit' >sign In</button>
    <p className='text-center text-base text-[#636364]'>already have an account? <Link href='/Login' className='text-red-500 cursor-pointer'>Login</Link></p>
  </form>
  )
}

export default RegisterFrom