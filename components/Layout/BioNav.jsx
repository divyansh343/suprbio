import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiOutlineQrcode } from 'react-icons/hi';
import { SiAdblock, SiAddthis, SiClickup, SiLighthouse, SiRollsroyce, SiThunderbird } from 'react-icons/si';
import power from '../../assets/images/power.png'
import user from '../../assets/images/user.png'
import copy from 'copy-to-clipboard';
import { toastify } from '../../utils/setCookie';
import { RWebShare } from 'react-web-share';
import {QRCodeCanvas} from 'qrcode.react';
import Link from 'next/link';
import { IoIosShareAlt } from 'react-icons/io';
import { FiShare } from 'react-icons/fi';

const BioNav = ({ username, email, avatar }) => {

  const downloadQR = () => {
    const canvas = document.getElementById("qr-body");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${username}_super_link.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const myUrl = `${process.env.NEXT_PUBLIC_HOST + username}`
  

  return (
    <div className='header-gg'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          {/* <p className="btn btn-ghost normal-case text-md lg:text-lg font-medium tracking-wide">
            <span className='mr-[2px]'>
              <Image src={power} height={25} width={25} alt="" />
            </span>
            <span className='  '>
            Suprr.link/

            </span>
            <span className='mx-[2px]  text-primary saturate-150 font-medium tracking-wide'>
              {username}
            </span>

          </p> */}
        </div>
        <div className="flex-none">
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <span className='text-2xl lg:text-3xl'>
                  < HiOutlineQrcode />
                </span>
              </div>
            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-42 bg-base-100 shadow">
              <div  className="card-body ">
                  <QRCodeCanvas
                  id="qr-body"
                  value={myUrl} />
                  
                  <a className="link link-primary text-center"onClick={downloadQR}> Download QR </a>

              </div>
            </div>
          </div> */}
          <div className="dropdown dropdown-end">
          <RWebShare
                    data={{
                      text: `${username}'s suppr link profile`,
                      url: myUrl,
                      title: `${username}'s suppr link profile`,
                    }}
                    // onClick={() => console.log("shared successfully!")}
                  >
            <label tabIndex={0} className="btn btn-ghost btn-circle bg-primary btn-primary avatar
            top-2 lg:top-5 right-2 lg:right-40
            ">
              <div className="w-9 text-xl lg:text-xl text-base-100 grid place-items-center p-2 rounded-full">
              <FiShare />
                {/* <Image height={40} width={40} alt="" src={avatar.url} /> */}
              </div>
            </label>
            </RWebShare>

            {/* <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
              <Link href='/login'>
                <p className="justify-between">
                  login
                </p>
                </Link>
              </li>
              <li><a onClick={() => {
                copy(myUrl)
                toastify("Copied")
              }}>copy link </a></li>
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
              <li ><a href={`mailto:${email}`} target='_blank' rel='noreferrer' >Contact</a></li>
              <li >
                <Link href='/register'>
                <span className='bg-primary p-1 px-2  rounded-[4px] hover:scale-105 cursor-pointer text-base-100'>
                  <span className='inline-block mr-[1px]  animate-pulse'>
                    <SiLighthouse />
                  </span>
                  Create Suprr link
                </span>
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioNav