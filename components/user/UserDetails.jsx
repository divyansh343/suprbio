import Image from 'next/image'
import React, { useState } from 'react'
import {FaJava, FaRegImage, MdSelfImprovement, MdVideoLibrary } from 'react-icons/fa'

const UserDetails = ({ name, avatar }) => {
  const [ename, seteName] = useState(name)
  return (
    <>
      <div className='grid grid-cols-2 lg:grid-cols-3'>
        <div className="col-span-1"></div>
        <div className='mt-4 col-span-2'>

          <div className='grid'>

            {/* avatar */}
            <div className='grid grid-flow-col'>
              <div className='grid place-items-start '>

                <div className="avatar online ">
                  <div className="w-24 rounded-full">
                    <Image src={avatar.url} height={50} width={50} alt="" />
                  </div>
                </div>
              </div>

              <div className='grid grid-flow-row'>
                <span>
                <span className='inline-block mx-1 text-md'>
                  <FaJava />
                </span>
                <a className="link link-primary">Change avatar</a>
                </span>
                <a className="link link-primary">Change Username</a>
                <a className="link link-primary">Change password</a>
              </div>
            </div>
            {/* avatar */}

            {/* input */}
            <>

              <div className="form-control w-full max-w-xs mt-">

                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" onChange={e => seteName(e.target.value)} value={ename} placeholder="name" className="input input-bordered input-primary w-full max-w-xs" />

              </div>



              <div className="form-control">

              </div>
              <textarea placeholder="Bio" className="textarea textarea-primary textarea-bordered textarea-lg w-full max-w-xs my-4" ></textarea>


            </>
            {/* input */}




          </div>

        </div>
      </div>
    </>
  )
}

export default UserDetails