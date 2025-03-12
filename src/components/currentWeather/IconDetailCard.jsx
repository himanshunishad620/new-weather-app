import React from 'react'

export default function IconDetailCard({children}) {
  
  return (
    <div className=' relative rounded-[7px] flex flex-col justify-center items-center col-span-1 row-span-1 bg-[#252525] aspect-1/1 lg:aspect-auto' >
      {children}
    </div>
  )
}
