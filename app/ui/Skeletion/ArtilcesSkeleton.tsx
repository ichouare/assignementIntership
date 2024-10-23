import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton"


const ArticleSkeleton = () => {
  return (
    <div className='cursor-pointer'>
      <article className='flex w-[304px] h-[300px] min-h-[300px] flex-col items-center gap-4 px-4 cursor-pointer'>
        <Avatar className="w-[304px] h-[176px] rounded-none">
          {/* Image skeleton */}
          <Skeleton className="w-[100px] h-[20px] rounded-full" />

          <AvatarFallback className='rounded-none'>CN</AvatarFallback>
        </Avatar>
        
        {/* Title skeleton */}
        <Skeleton className="w-[100px] h-[20px] rounded-full" /> 
        
      </article>
    </div>
  );
};

export default ArticleSkeleton;