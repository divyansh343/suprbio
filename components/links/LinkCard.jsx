import React from 'react'

const LinkCard = ({ item }) => {
  return (
    <>
      <a href={item.url} target="_blank" rel='noreferrer'>
        <div className='border-[0.4px] border-secondary drop-shadow-sm 
              btn-ghost
              btn
              normal-case
              grid place-items-center my-3
              border-opacity-70  rounded-[7px] px-2 py-2 lg:px-3 '>
          <p className='text-[16px] lg:text-[17px] font-medium  text-center tracking-wide'>
            {item.title}
          </p>
        </div>
      </a>
    </>
  )
}

export default LinkCard