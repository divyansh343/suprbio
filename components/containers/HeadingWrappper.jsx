import React from 'react'

const HeadingWrappper = ({ title, icon }) => {
  return (
    <>
      {title.length === 0 ? null :
        <div className='mt-4 mb-4'>
          <p className='text-[15px] lg:text-[16px]   font-medium tracking-wide cursor-pointer '>
            <span className='inline-block animate-pulse  mx-[1px] text-[16px]'>{icon}</span>
            <span className='mx-2  '>
              {title}
            </span>
          </p>
        </div>
      }
    </>
  )
}

export default HeadingWrappper