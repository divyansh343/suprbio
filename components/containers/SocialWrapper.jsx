import Image from 'next/image'
import React from 'react'

const SocialWrapper = ({ item, link }) => {
  return (
    <>
      {
        link === undefined || link.length === 0 ? null :
          <div className='text-2xl lg:text3xl text-blue-600 saturate-150 inline-block cursor-pointer mx-2
          lg:mx-3 hover:animate-pulse px-1 lg:px-2
      hover:scale-105
      '>
            <a href={link} className="btn btn-ghost btn-circle grid place-items-center" target='_blank' rel="noreferrer">
              <Image className='grid place-items-center ' src={item} height={28} width={28} alt="" />
            </a>
          </div>
      }
    </>
  )
}

export default SocialWrapper