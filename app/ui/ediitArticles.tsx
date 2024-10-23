'use client'

import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { editArticleAction } from '@/app/ui/actions/editArticleAction'
import { redirect } from 'next/navigation'

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CiEdit } from "react-icons/ci";

type propsType = {
  id: number;
  img: string;
  title: string;
  content: string;
}

const EditArticle = ({ id, img, title, content }: propsType) => {
  const author = 'james'
  const ImgRef = useRef(null)
  // Set the initial state of the form inputs
  const [formData, setFormData] = useState({
    id: id || 10,  // If id is provided, use it, otherwise set to 0
    file: img,
    title: title || '',
    content: content || '',
  })

  const initialState = {
    status: '',
  }


  // Create a reference to the form element to reset it after form submission
  const ref = useRef<HTMLFormElement>(null)
  const [state, formAction] = useFormState(editArticleAction, initialState)
  
  useEffect(() => {
    console.log(state)
    // console.log(formData)
    // Trigger redirect when status is '200'
    if (state?.status === '200') {
      redirect(`/Blog/${id}`)
    }
  }, [state?.status])

  // Handle input changes and update the form data state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, } = e.target
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value ,
      
      // If the input is a file input, store the file
    }))
    console.log('Triggering file input', formData)
  }
  
  const triggerFileInput = () => {
    if (ImgRef.current) {
      ImgRef.current.click();
    
    }
};

const handleImg  = (e : React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target?.files?.[0] 
  setFormData((prevData) => ({
   ...prevData,
    file: URL.createObjectURL(file),
  }))
}

  return (
    <form
      ref={ref}
      className="w-full  min-h-screen flex flex-col"
      action={async (formData : FormData) => {
        ref.current?.reset()
        console.log(formData)
        const status = await formAction(formData)
      }}
    >
      <div className="w-full min-h-16 h-16 flex flex-col items-center justify-evenly px-4">
        <button type="submit" className="capitalize self-end bg-blue-400 w-[100px] p-2 text-white rounded-lg">publish</button>
      </div>
      <section className="p-4 grow flex   ">
        <div className="grow flex flex-col gap-4">
          <div className='w-full h-[350px]  self-center relative border'>
            <ToggleGroup  type="single" className='absolute bg-green-100 rounded-none' >
          <ToggleGroupItem value="b" className='bg-green-100 rounded-none cursor-pointer' onClick={triggerFileInput}><CiEdit  className='text-2xl' /></ToggleGroupItem>
            </ToggleGroup>
            <Image
              src={formData.file}
              alt={title}
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
          <div>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              placeholder="title"
              className="w-full p-3 outline-none text-4xl placeholder:text-4xl capitalize tracking-widest"
              maxLength={12}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grow ">
            <textarea
              id="content"
              name="content"
              value={formData.content}
              placeholder="content"
              className="w-full h-full p-3 outline-none placeholder:text-4xl capitalize tracking-widest"
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </section>
      <input type="hidden" name={"id"} value={id} />
    </form>
  )
}

export default EditArticle
