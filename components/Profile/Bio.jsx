import React from 'react'

const Bio = ({ bio }) => {
  return (
    <>
      <div className='mx-[20px] md:mx-[100px] lg:mx-[330px] saturate-150 cursor-pointer'>
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