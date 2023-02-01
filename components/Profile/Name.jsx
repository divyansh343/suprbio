import React from 'react'
import { MdVerified } from 'react-icons/md';

const Name = ({name, verified , username}) => {
  return (
    <>
      <div className='text-center my-4'>
        <p className='text-[20px] font-medium tracking-wide'>
          <span className='inline-block'>
            {name.charAt(0).toUpperCase() + name.substr(1)}
          </span>
          {
            verified ? <span className='inline-block mx-1 text-blue-600'><MdVerified /></span> : null
          }
        </p>
        <p className='text-[15px] text-secondary tracking-wide'>{"@" + username}</p>

      </div>
    </>
  )
}

export default Name