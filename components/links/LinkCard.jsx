import React from 'react'

const LinkCard = ({ item }) => {
  return (
    <>
      <a href={item.url} target="_blank" rel='noreferrer'>
        <div className='
              saturate-150
              bg-secondary
              hover:shadow
              hover:scale-105
              normal-case
              grid place-items-center my-3
              border-opacity-70  rounded-[7px] px-2 py-3 lg:px-3 '>
          <p className='text-[18px] lg:text-[17px] font-medium text-base-100
          text-center tracking-wide'>
            {item.title}
          </p>
        </div>
      </a>
    </>
  )
}

export default LinkCard