import React from 'react'

const Bio = ({bio}) => {
  return (
    <>
      <div className='mx-[20px] lg:mx-[340px] saturate-150 '>
        <div className=' drop-shadow-sm border-opacity-70  rounded-[7px] px-3 py-2 lg:px-3 '>
          <p className='text-[15px] lg:text-[17px] font-medium text-center tracking-wide'>
            {bio}
          </p>
        </div>
      </div>
    </>
  )
}

export default Bio