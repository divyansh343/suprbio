import React from 'react'
import LoginContainer from '../components/auth/LoginContainer'
import RegisterContainer from '../components/auth/RegisterContainer'

const register = () => {
  return (
    <div data-theme="winter" class="h-screen md:flex">
      <div class="relative overflow-hidden md:flex w-1/2 bg-secondary-focus i justify-around items-center hidden">

        <div>
          <h1 class="text-white font-bold text-4xl ">Log in</h1>
          <p class="text-white mt-1">The most popular peer to peer lending at SEA</p>
          <button type="submit" class="block w-28 bg-white text-secondary mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
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
  )
}

export default register