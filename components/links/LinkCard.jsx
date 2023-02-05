import React from 'react'

const LinkCard = ({ item }) => {
  return (
    <>
      <a href={item.url} target="_blank" rel='noreferrer'>
        <div className='border-[0.4px] border-secondary drop-shadow-sm 
              btn-ghost
              normal-case
              grid place-items-center my-5
              border-opacity-70  rounded-[7px] px-2 py-4 lg:px-3 '>
          <p className='text-[18px] lg:text-[17px] font-medium  text-center tracking-wide'>
            {item.title}
          </p>
        </div>
      </a>
    </>
  )
}

export default LinkCard