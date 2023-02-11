import React from 'react'

const LinkCard = ({ item }) => {
  return (
    <>
      <a href={item.url} target="_blank" rel='noreferrer'>
        <div className='
              saturate-150
              bg-primary
              hover:shadow
              hover:scale-105
              normal-case
              grid place-items-center my-3
              border-opacity-70  rounded-[7px] px-2 py-3 lg:px-3 '>
          <p className='text-md lg:text-md text-base-100 font-medium 
          text-center tracking-wide'>
            {item.title}
          </p>
        </div>
      </a>
    </>
  )
}

export default LinkCard