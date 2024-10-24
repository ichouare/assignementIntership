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
    const ImgRef = useRef<HTMLInputElement>(null)
    const  [imgSelected, SetImgSelected] = useState<string>('')
    const titleRef = useRef<HTMLInputElement>(null)
    const contentRef = useRef<HTMLTextAreaElement>(null)


     const handleFocus = () => {
        if(titleRef.current &&  contentRef.current)
        {
          console.log("Entering focus")
          contentRef.current.classList.remove("border-s-2");
          titleRef.current.classList.add("border-s-2");
        }
    }
     const ContenthandleFocus = () => {
        if(contentRef.current && titleRef.current)
        {
          console.log("Entering focus")
          titleRef.current.classList.remove("border-s-2");
          contentRef.current.classList.add("border-s-2");
        }
    }


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
          titleRef.current.focus();
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
                <button type="submit" className='capitalize self-end bg-blue-400 w-[100px] p-2 text-white rounded-lg cursor-pointer'>publish</button>
        </div>
        <section className='p-4 grow  flex'>
            <div className='grow flex flex-col gap-4 '>
                <div className='w-full h-[350px]  self-center relative'>
            <input 
            ref={ImgRef}
            type="file"
            id="file"
              name="file"
              className=" hidden w-full p-3 outline-none text-4xl placeholder:text-4xl capitalize tracking-widest"
              onChange={handleImg}
              />
            {imgSelected.length  ? <Image
              src={imgSelected}
              alt={'article_img'}
              width={400}
              height={400}
              className='w-full h-full object-cover'
              /> : 
              <>
           
             <div className="w-[250px]    h-full flex flex-col items-center justify-center text-center relative">
             <ToggleGroup  type="single" className=' bg-green-100 rounded-none' >
          <ToggleGroupItem value="b" className='bg-green-100 rounded-none cursor-pointer' onClick={triggerFileInput}><CiEdit  className='text-2xl' /></ToggleGroupItem>
            </ToggleGroup>
                {/* <IoCloudUploadOutline className="w-full text-white text-8xl  " /> */}
                <p className="text-sm text-black font-[400] first-letter:capitalize tracking-wide">
                  {" "}
                  add Image for your Article
                </p>
              </div>
              </> 
            }
          </div>
                <div className='w-full h-[100px]'>
                <input ref={titleRef} type='text' id='title' name='title'  placeholder='title' className='w-full h-fit break-words p-3 outline-none text-xl placeholder:text-4xl capitalize tracking-widest break-all' onFocus={handleFocus}  minLength={20} maxLength={50}   required/>
                </div>
                <div className='grow'>
                <textarea ref={contentRef} id='content' name='content'  placeholder='content' className='w-full h-full p-3 outline-none placeholder:text-4xl capitalize tracking-widest' minLength={200} onFocus={ContenthandleFocus} required/>
                </div>
            </div>
        </section>
    </form>
  )
}

export default NewArticle