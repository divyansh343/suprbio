import React from 'react'

const LinkCard = ({ item }) => {
  return (
    <>
      <a href={item?.url} target="_blank" rel='noreferrer'>
        <div className='
              border
              border-primary
              hover:shadow
              hover:scale-105
              grid place-items-center my-3
              border-opacity-70 rounded-lg px-2 py-2 lg:px-3 '>
          <p className='text-[15px] lg:text-[16px] text-primary font-medium 
          text-center tracking-wide'>
            {item?.title}
          </p>
        </div>
      </a>
    </>
  )
}

export default LinkCard