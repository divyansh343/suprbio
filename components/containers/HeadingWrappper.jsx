import React from 'react'

const HeadingWrappper = ({title, icon}) => {
  return (
    <>
      <div className='mt-6 mb-3'>
        <p className='text-[18px] font-semibold tracking-wide '>
          <span className='inline-block mx-1 text-red-800'>{icon}</span>
          {title}
        </p>
      </div>
    </>
  )
}

export default HeadingWrappper