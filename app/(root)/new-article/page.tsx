'use client'

import Image from 'next/image'
import React, {useRef, useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import {NewArticleAction} from '../../ui/actions/NewArticleAction'
import { redirect } from 'next/navigation'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CiEdit } from "react-icons/ci";

 const NewArticle = () => {
    const author = 'james'
    const ImgRef = useRef<HTMLFormElement>(null)
    const  [imgSelected, SetImgSelected] = useState<string>('')
    const initialState = {
        status: '',
        }
        const  ref = useRef(null)
        const  [state, formAction] = useFormState(NewArticleAction, initialState)
      

        const triggerFileInput = () => {
          if (ImgRef.current) {
            ImgRef.current.click()
      };
    }

      const handleImg  = (e : React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target?.files?.[0] 
        SetImgSelected(URL.createObjectURL(file))

      }
      
        useEffect(() => {
          // Trigger redirect when status is '200'
          if (state?.status === '200') {
            redirect('/')
          }
        }, [state?.status])
  return (
    <form  ref={ref} className=' w-full min-h-screen flex flex-col' action={async (formData : any) => {
        ref?.current?.reset()
        SetImgSelected('')
        const status = await formAction(formData)
        console.log(status)
        }}>
        <div className=' w-full min-h-16 h-16 flex flex-col items-center justify-evenly px-4'>
                <button type="submit" className='capitalize self-end bg-blue-400 w-[100px] p-2 text-white rounded-lg'>publish</button>
        </div>
        <section className='p-4 grow  flex'>
            <div className='grow flex flex-col gap-4 '>
                <div className='w-full h-[350px]  self-center relative border'>
            <ToggleGroup  type="single" className='absolute bg-green-100 rounded-none' >
          <ToggleGroupItem value="b" className='bg-green-100 rounded-none cursor-pointer' onClick={triggerFileInput}><CiEdit  className='text-2xl' /></ToggleGroupItem>
            </ToggleGroup>
            <Image
              src={imgSelected}
              alt={'article_img'}
              width={400}
              height={400}
              className='w-full h-full object-cover'
              />
            <input
            ref={ImgRef}
              type="file"
              id="file"
              name="file"
              className=" hidden w-full p-3 outline-none text-4xl placeholder:text-4xl capitalize tracking-widest"
              onChange={handleImg}
            />
          </div>
                <div className='w-full h-[100px]'>
                <input type='text' id='title' name='title'  placeholder='title' className='w-full h-full p-3 outline-none text-4xl placeholder:text-4xl capitalize tracking-widest break-all' maxLength={50}   required/>
                </div>
                <div className='grow'>
                <textarea id='content' name='content'  placeholder='content' className='w-full h-full p-3 outline-none placeholder:text-4xl capitalize tracking-widest' minLength={200} required/>
                </div>
            </div>
        </section>
    </form>
  )
}

export default NewArticle