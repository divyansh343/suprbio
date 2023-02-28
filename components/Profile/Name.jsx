import Image from 'next/image';
import React from 'react'
import verifiedImg from '../../assets/images/verified.png'
const Name = ({name, verified , username}) => {
  return (
    <>
      <div className='text-center mt-4  mb-2 cursor-pointer'>
        <p className='text-lg lg:text-xl font-medium tracking-wide'>
          <span className='inline-block'>
            {name ? name.charAt(0).toUpperCase() + name.substr(1) : "Not Present" }
          </span>
          {
            verified ? <span className='inline-block mx-1 '>
              <Image src={verifiedImg} width={25} height={25} alt="verified" />
            </span> : null
          }
        </p>
        <p className='text-sm lg:sm  text-primary tracking-wide'>{"@" + username}</p>

      </div>
    </>
  )
}

export default Name