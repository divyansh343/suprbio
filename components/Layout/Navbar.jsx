import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiOutlineQrcode } from 'react-icons/hi';
import { MdOutlineDarkMode } from 'react-icons/md';
import power from '../../assets/images/power.png'
import TextTransition, { presets } from "react-text-transition";
import { isMobile } from 'react-device-detect';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { BsFillMoonFill, BsFillSunFill, BsMoonFill } from 'react-icons/bs';

const Navbar = ({ username, setThemeState, themeState }) => {
  const router = useRouter()
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "darcy",
    "roman",
    "erica",
    "natasha",
    "frank",
    "alex",
  ];
  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div >
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/">
            <div className="btn btn-ghost normal-case text-lg lg:text-lg font-semibold tracking-wide">
              <span className='mx-1'><Image src={power} height={25} width={25} alt="" /></span>
              {/* {isMobile ? "/" : "Suprr.link/"} */}

              <span className='text-primary pl-1'> Suprr.link</span>
              <span className='hidden md:block mx-[2px] text-primary saturate-150 font-medium tracking-wide'>
                <TextTransition springConfig={presets.gentle}>
                  {"/" + TEXTS[index % TEXTS.length]}
                </TextTransition>
              </span>

            </div>
          </Link>
        </div>
        <div className="navbar-end">
          {
            router.pathname !== "/" ? null :   <label className="swap swap-rotate mx-1 md:mx-2">

            {/* <!-- this hidden checkbox controls the state --> */}
            <input onChange={themeState === "light" ?()=>setThemeState("night"):()=>setThemeState("light")} type="checkbox" />
            <span className='swap-on text-2xl text-primary'>
            <BsFillSunFill />
            </span>

            {/* <!-- moon icon --> */}
            <span className='swap-off text-xl text-primary'>
            <BsMoonFill />
            </span>
          </label>
          }
        
          <Link href="/login">
            <button className="btn font-normal text-base btn-primary btn-sm normal-case mx-1">Sign In</button>
          </Link>
          {/* <Link href="/register">
            <button className="btn font-normal text-base btn-primary btn-sm normal-case">Sign up</button>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar