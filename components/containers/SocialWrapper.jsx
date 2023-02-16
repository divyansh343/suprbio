import Image from 'next/image'
import React from 'react'

const SocialWrapper = ({ item, link }) => {
  return (
    <>
      {
        link === undefined ? null :
          <div className='text-3xl lg:text-4xl text-blue-600 saturate-150 inline-block cursor-pointer mx-2
          lg:mx-3 hover:animate-pulse px-1 lg:px-2
      hover:scale-105
      '>
            <a href={link} className="btn btn-ghost btn-circle grid place-items-center" target='_blank' rel="noreferrer">
              <Image className='grid place-items-center' src={item} height={30} width={30} alt="" />
            </a>
          </div>
      }
    </>
  )
}

export default SocialWrapper