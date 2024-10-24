"use client"
// import { unstable_cache } from 'next/cache'
import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect } from "next/navigation";

type typeProps = {
  id: number;
  img: string;
  title: string;
  content: string;
  create_at: Date;
};

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CiEdit,CiTrash } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import { deleteAction } from '@/app/ui/actions/DeleteAction';






const ArticlesDetails = ({ id, img, title, content, create_at }: typeProps) => {

  const router = useRouter()


  const Delelefunction = async () =>{
    try{
      await deleteAction(id)
      toast.success('is Deleted!')
      setTimeout(()=>{
        router.push('/')
      }, 2000)
    }catch(err){
      toast.error('can please try after!')
    }

  }

  return (
    <article className="w-full max-w-full  sm:max-w-[640px]  border-t-2 flex flex-col gap-8 px-4 py-6">
     <ToastContainer />
    <div className="flex items-center gap-2 w-full">
      <Avatar className="w-14 h-14">
        <AvatarImage src={"/" + img} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="grow w-full">
        <h2 className="text-xl capitalize font-light">unknown user</h2>
        <p className="text-gray-500 text-sm">{new Date(create_at).toDateString()}</p>
      </div>
      <ToggleGroup type="single" className="self-start flex gap-2 cursor-pointer">
        <Link href={`/Blog/${id}/edit`}>
          <ToggleGroupItem value="b"><CiEdit  className="text-2xl cursor-pointer"/></ToggleGroupItem>
        </Link>
        <ToggleGroupItem value="c" className="text-2xl cursor-pointer" onClick={() => Delelefunction()}><CiTrash /></ToggleGroupItem>
      </ToggleGroup>
    </div>
    
    <div className="w-full flex flex-col items-center gap-4">
      <div className='w-full flex flex-col items-start gap-4 px-2 '>
           <p className='font-blod text-4xl text-start  leading-normal'>{title}</p> 
           <p className='w-[80%] h-fit text-start font-light text-base leading-relaxed tracking-widest break-all'>{content}</p>
        </div>
        <div className="w-[400px] h-[400px] ">
          <Image
            src={img}
            alt={`${title}_article_img`}
            width={200}
            height={200}
            className="w-full h-full object-contain"
          />
        </div>
    </div>
  </article>
  
  );
};

export default ArticlesDetails;
