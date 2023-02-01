import Image from 'next/image'
import React from 'react'

const VideoCard = () => {
  return (
    <div className='rounded-[6px] border-[0.1px]
    saturate-150
    hover:shadow
     border-primary'>
      <Image
        className='rounded-[6px] border-[2px] border-secondary
        
        '
        height={230} width={380} alt="" src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZGVvfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
      <div className='grid place-items-center'>
        <p className='text-[18px] text-center'>How to fuck around</p>
      </div>
    </div>
  )
}

export default VideoCard