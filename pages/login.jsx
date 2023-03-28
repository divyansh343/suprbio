import Link from 'next/link'
import React from 'react'
import { FiWind } from 'react-icons/fi'
import { MdArrowBackIos } from 'react-icons/md'
import LoginContainer from '../components/auth/LoginContainer'
import RegisterContainer from '../components/auth/RegisterContainer'
import Navbar from '../components/Layout/Navbar'

const register = () => {
  return (
    <>
      <div className="block lg:hidden">
        <Navbar />
      </div>
      <div data-theme="light" class="lg:h-screen md:flex">
        <div class="relative overflow-hidden md:flex w-1/2 bg-accent-focus i justify-around items-center hidden">

          <div>
            <h1 class="text-white font-bold text-4xl ">Sign In <br />Become Serious</h1>
            <p class="text-white mt-1"> <span className='inline-block'><FiWind/></span> Manage your lnks, layout, social, and more.</p>
            <Link href='/'>
              <button type="submit" className="block w-28 bg-white text-secondary mt-4 py-2 rounded-2xl font-bold mb-2"> <span className='inline-block'><MdArrowBackIos /></span> Go Back</button>
              </Link>
          </div>

          <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div class="flex md:w-1/2  justify-center py-10 items-center  ">
          <LoginContainer />
        </div>
      </div>
    </>
  )
}

export default register