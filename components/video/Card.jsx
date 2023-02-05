import Image from 'next/image'
import React from 'react'
import { isMobile } from 'react-device-detect'

const Card = ({ video_thumbnail, video_title }) => {
  return (
    <div className=' hover:shadow hover:border-[0.1px] rounded-[11px] border-secondary  cursor-pointer my-3'>

      <div className='grid grid-cols-10 rounded-[11px] lg:p-2'>
        <div className="col-span-4">
          <Image
            className='rounded-[10px] border-[1px] border-secondary '
            src={video_thumbnail ? video_thumbnail : "https://images.unsplash.com/photo-1519923041107-e4dc8d9193da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmllbm5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"} height={340} width={480} alt="" />
        </div>
        <div className="col-span-6">
          <div className='ml-3 lg:mx-5 lg:my-2  '>
            <p className='text-[18px] font-medium'>
              {video_title}
            </p>
            <p>
            {
              isMobile ? null :
              <>

                <span className='text-[14px] font-light  m-2'>
                  Social Media Manager & Consultant 🤓 | I help brands
                  Social Media Man
                </span>
              </>
            }

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card