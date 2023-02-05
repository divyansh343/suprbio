import React from 'react'

const HeadingWrappper = ({title, icon}) => {
  return (
    <>
      <div className='mt-8 mb-2'>
        <p className='text-[18px]  font-semibold tracking-wide '>
          <span className='inline-block mx-1 text-[16px]'>{icon}</span>
          <span className='mx-1 underline'>
          {title}
          </span>
        </p>
      </div>
    </>
  )
}

export default HeadingWrappper