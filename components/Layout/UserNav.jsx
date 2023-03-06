import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiOutlineQrcode } from 'react-icons/hi';
import power from '../../assets/images/power.png'
import TextTransition, { presets } from "react-text-transition";
import { isMobile } from 'react-device-detect';
import { signOut } from '../../utils/setCookie';
import { RWebShare } from 'react-web-share';

const Navbar = ({ avatar, username }) => {
  const myUrl = `${process.env.NEXT_PUBLIC_HOST + username}`
  return (
    <div>
      <div className="navbar bg-base-100 border-b-[1px]">
        <div className="flex-1">
          <div className="btn btn-ghost normal-case text-md lg:text-lg font-semibold tracking-wide">
            <span className='mx-1'><Image src={power} height={25} width={25} alt="" /></span>
            Suprr.link
          </div>
          {/* <p className='ml-[50px] animate-pulse cursor-pointer'>Create my unfold bio</p> */}
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
        
           
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image height={50} width={50} alt="" src={avatar} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {/* <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li> */}
              <li>
                  <RWebShare
                    data={{
                      text: `${username}'s suppr link profile`,
                      url: myUrl,
                      title: `${username}'s suppr link profile`,
                    }}
                    // onClick={() => console.log("shared successfully!")}
                  >
                    <button>Share 🔗</button>
                  </RWebShare>
              </li>
              {/* <li><a>Settings</a></li> */}
              <li className='text-error font-semibold'><a onClick={signOut}>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar