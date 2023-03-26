import React, { useEffect } from 'react'
import RegisterContainer from '../components/auth/RegisterContainer'
import Navbar from '../components/Layout/Navbar'
import { getCookie } from '../utils/setCookie'

const register = () => {
  return (
    <>
     <div className="block lg:hidden">
        <Navbar />
      </div>
      <div data-theme="light" className=''>
        <div className=" md:flex lg:h-screen">
          <div className="relative overflow-hidden md:flex w-1/2 bg-secondary-focus i justify-around items-center hidden">

            <div>
              <h1 className="text-white font-bold text-4xl tracking-wider">Go Viral</h1>
              <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
              <button type="submit" className="block w-28 bg-white text-secondary mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
            </div>

            <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          </div>
          <div className="flex md:w-1/2  justify-center py-10 items-center  ">
            <RegisterContainer />
          </div>
        </div>

      </div>
    </>
  )
}

export default register