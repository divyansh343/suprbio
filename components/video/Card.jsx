import Image from 'next/image'
import React from 'react'
import video from '../../assets/images/video.jpg'

const Card = ({ video_thumbnail, video_title }) => {
  return (
    <div className=' hover:scale-105  border-[0.1px] rounded-[6px] border-primary  cursor-pointer my-3'>

      <div className='grid grid-cols-10 rounded-[11px] p-1'>
        <div className="col-span-4">
          <Image
          priority
            className='rounded-[4px] '
            src={video_thumbnail ? video_thumbnail : video } height={340} width={480} alt="" />
        </div>
        <div className="col-span-6">
          <div className='ml-3 lg:mx-5 lg:my-2  '>
            <p className='text-md lg:text-lg  font-semibold tracking-wide text-center'>
              {video_title}
            </p>
            <p>
            {/* {
              isMobile ? null :
              <>

                <span className='text-[14px] font-light  m-2'>
                  Social Media Manager & Consultant 🤓 | I help brands
                  Social Media Man
                </span>
              </>
            } */}

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card