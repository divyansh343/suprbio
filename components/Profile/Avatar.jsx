import Image from 'next/image'
import React from 'react'
import user from '../../assets/images/user.png'

const Avatar = ({ avatar }) => {
  return (
    <>
      <div className=" mt-[15px] lg:mt-[30px] grid place-items-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
             <Image priority height={  50 } width={50 } alt="" src={avatar ? avatar.url : user} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Avatar