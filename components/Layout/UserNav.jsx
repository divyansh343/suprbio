import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import power from '../../assets/images/power.png'
import TextTransition, { presets } from "react-text-transition";
import { isMobile } from 'react-device-detect';
import { signOut } from '../../utils/setCookie'
import { RWebShare } from 'react-web-share';
import Link from 'next/link';
import { BiShareAlt } from 'react-icons/bi';
import { ImSwitch } from 'react-icons/im';
import { FiTrendingUp } from 'react-icons/fi';

const Navbar = ({ avatar, username }) => {
  const myUrl = `${process.env.NEXT_PUBLIC_HOST + username}`
  return (
    <div>
      <div className="navbar bg-base-100 border-b-[1px]">
        <div className="flex-1">
          <Link href="/">
            <div className="btn btn-ghost normal-case text-md lg:text-lg font-semibold tracking-wide">
              <span className='mx-1'><Image src={power} height={25} width={25} alt="" /></span>
              Suprr.link
            </div>
          </Link>
          {/* <p className='ml-[50px] animate-pulse cursor-pointer'>Create my unfold bio</p> */}
        </div>
        <div className="flex-none">
         
          <RWebShare
            data={{
              text: `${username}'s suppr link profile`,
              url: myUrl,
              title: `${username}'s suppr link profile`,
            }}
          // onClick={() => console.log("shared successfully!")}
          >
            <button className="btn btn-primary font-medium btn-sm my-1 normal-case tracking-wide">Share<span className='inline-block mx-1'> <BiShareAlt /></span> </button>
          </RWebShare>
          <div className="dropdown dropdown-end">

            <label tabIndex={0} className="btn btn-ghost btn-circle avatar text-xl">
              <GiHamburgerMenu />
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {/* <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li> */}
              {/* <li>
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
              </li> */}
              {/* <li><a>Settings</a></li> */}
              <li className='text-primary font-medium'><Link href="/user/change_username">Change Username</Link></li>
              <li className='text-primary font-medium'><Link href="/user/change_password">Change Password</Link></li>
              {/* <li className='text-error font-medium'><a onClick={signOut}>Delete Account</a></li> */}
              <li className='text-error font-semibold'>
                <a onClick={signOut}>
                  <span className='inline-block -mr-2'><ImSwitch /></span>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar