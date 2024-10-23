"use client"

import Link from 'next/link'
import React, {useRef, useEffect } from 'react'
import { useFormState } from 'react-dom'
import {Loginser} from './actions/LoginAction'
import { redirect } from 'next/navigation'


const LoginForm = () => {
  const initialState = {
  status: '',
  }
  const  ref= useRef(null)
  const  [state, formAction] = useFormState(Loginser, initialState)


  useEffect(() => {
    // Trigger redirect when status is '200'
    if (state?.status === '200') {
      redirect('/Register')
    }
  }, [state?.status])

  return (
    <form  ref={ref}  className='w-full gap-6     grid grid-flow-row py-10 capitalize  tracking-wider ' action={async (formData) => {
      ref.current.reset()
      const status = await formAction(formData)
      console.log(status)
      }}>
    <div className='flex flex-col gap-2 h-16  '>
    <label className='text-[#181818] text-base font-medium ' htmlFor='email'>Email</label>
    <input type='email'  name="email" id="email" placeholder='enter your Email' className='h-10 shadow rounded-xl p-4 py-5  border border-black/25  placeholder:capitalize placeholder:text-[14px] outline-none ' />
    </div>
    <div className='flex flex-col gap-2 h-16'>
    <label className='' htmlFor='Password'>Password</label>
    <input type='password' name="password" id="password" placeholder='' className='h-10 shadow rounded-xl p-2  border border-black/25  placeholder:capitalize placeholder:text-[14px] outline-none ' />
    </div>
    <div className='w-full flex flex-col gap-4'>
    <div className='flex items-center gap-2 '>
    <input type='checkbox' name="remenber"  id='remenber' />
    <label className='grow text-start ' htmlFor='remenber'>remenber me</label>
    <p>forget password</p>
    </div>
    <button className='h-10 w-full bg-[#EA454C] shadow text-white text-center rounded-[12px] py-2  text-base font-medium  capitalize ' type='sumbit' >sign up</button>
    <button  type='button' className='h-10 w-full border border-black/25  shadow text-black text-center rounded-[12px]  py-2  text-base font-medium  capitalize' >sig in with google</button>
    <p className='w-full text-[15px] ca'>Don’t have an account? <Link href='/Register' className='text-red-500'>Sign up fo free!</Link></p>
    <p aria-live="polite" className="text-black">
        {state?.status}
      </p>
    </div>
  
</form>
  )
}

export default LoginForm