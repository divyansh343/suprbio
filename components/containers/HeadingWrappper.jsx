import React from 'react'

const HeadingWrappper = ({title, icon}) => {
  return (
    <>
      <div className='mt-8 mb-4'>
        <p className='text-[15px] lg:text-[16px]   font-semibold tracking-wide cursor-pointer '>
          <span className='inline-block animate-pulse  mx-[2px] text-[16px]'>{icon}</span>
          <span className='mx-1 '>
          {title}
          </span>
        </p>
      </div>
    </>
  )
}

export default HeadingWrappper