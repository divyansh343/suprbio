import Image from 'next/image'
import React from 'react'

const Card = ({ video_thumbnail , video_title }) => {
  return (
    <div className='cursor-pointer '>
      <Image
        className='rounded-[6px] border-[2px] hover:animate-bounce border-secondary'
        priority
        height={180} width={320} alt="" src={video_thumbnail} />
      <div className='grid place-items-start my-[2px]'>
        <p className='text-[16px] lg:text-[17px] font-medium  text-center tracking-wide'>{video_title}</p>
      </div>
    </div>
  )
}

export default Card