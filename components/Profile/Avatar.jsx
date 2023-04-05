import Image from 'next/image'
import React from 'react'
import user from '../../assets/images/user.png'

const Avatar = ({ avatar }) => {
  return (
    <>
      <div className=" mt-[10px] lg:mt-[10px] grid place-items-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
             <Image priority height={60} width={60} alt="" src={avatar ? avatar.url : user} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Avatar