import Image from 'next/image'
import React from 'react'

const LinkCard = ({ item }) => {
  return (
    <>
      <a class="card cursor-pointer glass bg-base-200 hover:bg-base-300 duration-200 space-y-1 p-3 group hover:scale-[1.02]" href={item?.url} target="_blank" rel='noreferrer'>
        <div class="grid palce-items-center ">
          <p class="font-medium text-center">{item?.title}</p>
        </div>
      </a>
      {/* <a href={item?.url} target="_blank" rel='noreferrer'>
        <div className='
        backdrop-blur-sm
              border
              border-primary
              hover:shadow
              hover:bg-primary
              grid place-items-center my-3
              text-primary
              font-medium
              hover:text-base-100
              border-opacity-70 rounded-xl  '>
          <p className='text-[15px] lg:text-[16px] 
          px-2 py-2 lg:px-3 drop-shadow-sm
          text-center tracking-wide'>
            {item?.title}
          </p>
        </div>
      </a> */}
    </>
  )
}

export default LinkCard