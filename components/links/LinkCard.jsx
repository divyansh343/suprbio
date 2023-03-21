import React from 'react'

const LinkCard = ({ item }) => {
  return (
    <>
      <a href={item?.url} target="_blank" rel='noreferrer'>
        <div className='
              border
              border-primary
              hover:shadow
              hover:bg-primary
              grid place-items-center my-3
              text-primary
              font-medium
              hover:text-base-100
              border-opacity-70 rounded-xl  '>
          <p className='text-[15px] lg:text-[16px] 
          px-2 py-2 lg:px-3
          text-center tracking-wide'>
            {item?.title}
          </p>
        </div>
      </a>
    </>
  )
}

export default LinkCard