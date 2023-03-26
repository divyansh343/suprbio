import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import heroImg from '../../assets/images/hero.png'
import oneImg from '../../assets/images/portraits/one.jpeg'
import twoImg from '../../assets/images/portraits/two.jpeg'
import fourImg from '../../assets/images/portraits/four.jpeg'
import fiveImg from '../../assets/images/portraits/five.jpeg'
import sixImg from '../../assets/images/portraits/six.jpeg'
import sevenImg from '../../assets/images/portraits/seven.jpeg'
import eightImg from '../../assets/images/portraits/eight.jpeg'
import nineImg from '../../assets/images/portraits/nine.jpeg'
import ProtoProfile from '../../components/Landing/ProtoProfile';
import { useState } from 'react'
import { FiZap } from 'react-icons/fi';


const Hero = () => {
  const [themeChange, setThemeChange] = useState("winter")
  const changeCol = (value) => {
    setThemeChange(value);
  }
  return (
    <>
      <div className="relative bg-base-100">
        <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
          <Image height={500} width={500} priority className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" />
        </div>
        <section className="relative py-12 sm:py-16 lg:pt-10 lg:pb-36">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
              <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                  <h1 className="text-4xl font-bold drop-shadow text-primary sm:text-6xl tracking-wide md:tracking-wide lg:text-6xl lg:leading-tight font-['Sarabun']">Create Your Suprr Profile Link</h1>
                  <div className="mt-8 lg:mt-12 grid place-items-center lg:place-items-start">
                    <div className="avatar-group -space-x-3 ">
                      <div className="avatar">
                        <div className="w-18">
                          <Image height={40} width={40} alt="" src={twoImg} />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-18">
                          <Image height={40} width={40} alt="" src={sixImg} />
                        </div>
                      </div>

                      <div className="avatar">
                        <div className="w-18">
                          <Image height={40} width={40} alt="" src={fourImg} />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-18">
                          <Image height={40} width={40} alt="" src={fiveImg} />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-18">
                          <Image height={40} width={40} alt="" src={sevenImg} />
                        </div>
                      </div>


                      <div className="avatar">
                        <div className="w-18">
                          <Image height={40} width={40} alt="" src={nineImg} />
                        </div>
                      </div>

                    </div>
                    <p className="pt-6 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">
                      For
                      <span className="font-bold px-1 text-primary">Artists</span>
                      ,
                      <span className="font-bold px-1 text-secondary">Content Creators</span>
                      &
                      <span className="font-bold px-2">Individuals</span>
                    </p>
                  </div>
                </div>

                <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                  <Link href="/register">
                    <button className="btn mx-1 normal-case btn-primary lg:btn-base    text-base lg:text-lg  font-medium">Create Suprr Link 
                    <span className='px-1'><FiZap /></span>
                     </button>
                  </Link>
                  <Link href="/login">
                    <button className="btn  normal-case  btn-primary lg:btn-base   text-base lg:text-lg font-medium">Sign In</button>
                  </Link>

                </div>
                <div className='mt-8'>
                  <div className="tabs tabs-boxed font-medium ">
                    <p onClick={() => { setThemeChange("winter") }} className={`tab  font-medium ${themeChange === "winter" ? "tab-active" : null}`}>Winter</p>
                    <p onClick={() => { setThemeChange("forest") }} className={`tab  font-medium ${themeChange === "forest" ? "tab-active" : null}`}>Forest</p>
                    <p onClick={() => { setThemeChange("night") }} className={`tab  font-medium ${themeChange === "night" ? "tab-active" : null}`}>Night</p>
                    <p onClick={() => { setThemeChange("cmyk") }}
                      className={`tab hidden md:block
                     font-medium ${themeChange === "cmyk" ? "tab-active" : null}`}>Cmyk</p>
                    <p onClick={() => { setThemeChange("lofi") }} className={`tab hidden md:block  font-medium ${themeChange === "lofi" ? "tab-active" : null}`}>Lofi</p>
                    <p onClick={() => { setThemeChange("halloween") }} className={`tab  font-medium ${themeChange === "halloween" ? "tab-active" : null}`}>Halloween</p>
                  </div>
                </div>
              </div>
              <div className="xl:col-span-3">
                <ProtoProfile theme={themeChange} />
                {/* <Image height={530} width={530} className="mx-auto drop-shadow-lg lg:px-20  rounded-xl" src={heroImg} alt="" /> */}
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Hero