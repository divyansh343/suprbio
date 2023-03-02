import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiOutlineQrcode } from 'react-icons/hi';
import power from '../../assets/images/power.png'
import TextTransition, { presets } from "react-text-transition";
import { isMobile } from 'react-device-detect';
import Link from 'next/link';

const Navbar = ({ username }) => {
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "ashish",
    "erica",
    "natasha",
    "danish",
  ];
  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div  >
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="btn btn-ghost normal-case text-lg lg:text-lg font-medium tracking-wide">
            <span className='mx-1'><Image src={power} height={25} width={25} alt="" /></span>
            {/* {isMobile ? "/" : "Suprr.link/"} */}
            
            <span className=' hidden lg:block'> Suprr.link</span>
            <span className='mx-[2px] text-primary saturate-150 font-medium tracking-wide'>
              <TextTransition springConfig={presets.gentle}>
                { "/"+TEXTS[index % TEXTS.length]}
              </TextTransition>
            </span>

          </div>
        </div>
        <div className="navbar-end">
          <Link href="/login">
            <button className="btn font-normal text-base btn-primary btn-sm normal-case mx-1">Sign In</button>
          </Link>
          
          <Link href="/register">
            <button className="btn font-normal text-base btn-primary btn-sm normal-case">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar