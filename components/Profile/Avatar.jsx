import Image from 'next/image'
import React from 'react'

const Avatar = ({avatar}) => {
  return (
    <>
      <div className="mt-[30px] grid place-items-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image height={70} width={70} alt="" src={avatar ? avatar : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Avatar