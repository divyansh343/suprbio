import React from 'react'
import Avatar from './Profile/Avatar'
import user from '../assets/images/user.png'
import power from '../assets/images/power.png'
import Name from './Profile/Name'
import Navbar from './Layout/Navbar'
import Image from 'next/image'
const NoUser = ({ username }) => {
  return (
    <>
      <div data-theme="winter">
        <div className=''>
          <div className=''>
            <div>
              <Navbar username={username} />
              <Avatar avatar={user} />
              <Name name=' User not exist' username={username} />

              <div className='mx-[20px] md:mx-[100px] lg:mx-[380px] saturate-150 cursor-pointer'>
                <div className=' drop-shadow-sm border-opacity-70  rounded-[7px] px-3 py-2 lg:px-3 '>

                  <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
                    <div class="flex items-center w-full space-x-2">
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <div class="flex items-center w-full space-x-2 max-w-[480px]">
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    </div>
                    <div class="flex items-center w-full space-x-2 max-w-[400px]">
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <div class="flex items-center w-full space-x-2 max-w-[480px]">
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    </div>

                  </div>

                </div>
              </div>

              <div className='grid place-items-center my-20'>
                <p className='btn btn-ghost shadow border-[1px] border-secondary normal-case text-lg font-normal'>
                  <span className='mr-2'><Image src={power} height={25} width={25} alt="" />
                  </span>
                  Create my unfold link
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoUser