import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiOutlineQrcode } from 'react-icons/hi';
import power from '../../assets/images/power.png'
import TextTransition, { presets } from "react-text-transition";
import { isMobile } from 'react-device-detect';

const Navbar = ({ user }) => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="btn btn-ghost normal-case text-lg lg:text-lg font-medium tracking-wide">
            <span className='mx-1'><Image src={power} height={25} width={25} alt="" /></span>
            unfold.bio
          </div>
          {/* <p className='ml-[50px] animate-pulse cursor-pointer'>Create my unfold bio</p> */}
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <span className='text-2xl lg:text-3xl'>
                  < HiOutlineQrcode />
                </span>
                {/* <span className="badge badge-sm indicator-item">8</span> */}
              </div>
            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                  <Image height={50} width={50} alt="" src={user.avatar.url} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar