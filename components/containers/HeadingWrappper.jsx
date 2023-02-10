import React from 'react'

const HeadingWrappper = ({title, icon}) => {
  return (
    <>
      <div className='mt-8 mb-4'>
        <p className='text-[18px]  font-semibold tracking-wider '>
          <span className='inline-block animate-pulse cursor-pointer mx-1 text-[16px]'>{icon}</span>
          <span className='mx-1 '>
          {title}
          </span>
        </p>
      </div>
    </>
  )
}

export default HeadingWrappper