import Image from 'next/image'
import React from 'react'

const Avatar = ({ avatar }) => {
  return (
    <>
      <div className="mt-[30px] grid place-items-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
             <Image height={70} width={70} alt="" src={avatar.url} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Avatar