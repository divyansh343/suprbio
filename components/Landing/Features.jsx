import Image from "next/image";
import { FiTrendingUp } from 'react-icons/fi';
import { ImProfile } from 'react-icons/im';
import { HiAtSymbol, HiShare } from 'react-icons/hi';

import React from 'react'

const Features = () => {
  return (
    <>
      <div  class="py-8 bg-base-100 lg:h-screen overflow-hidden">
        <div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
          <div>
            {/* <span class="text-secondary text-lg font-semibold">Main features</span> */}
            <h2 class="mt-4 text-5xl text-primary font-bold ">
              <span className="inline-block pr-2">
                <FiTrendingUp />
              </span>Supercharge
              Your Online Presense</h2>
          </div>
          <div class="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 gap-3 ">
            <div class="relative group bg-primary text-base-100  border transition hover:z-[1] hover:shadow-2xl">
              <div class="relative p-8 space-y-8">
                <span className="text-6xl ">
                  <ImProfile />
                </span>
                <div class="space-y-2">
                  <h5 class="text-xl  font-medium transition ">Personal Profile</h5>
                  <p class="text-sm  ">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
                </div>
              </div>
            </div>
            <div class="relative group bg-primary text-base-100  border transition hover:z-[1] hover:shadow-2xl">
              <div class="relative p-8 space-y-8">
              <span className="text-6xl ">
                  <HiAtSymbol />
                </span>

                <div class="space-y-2">
                  <h5 class="text-xl  font-medium transition ">Personal Url</h5>
                  <p class="text-sm  ">Customize your Suprrlink to match your brand. Make it feel like you.</p>
                </div>
               
              </div>
            </div>
            <div class="relative group bg-primary text-base-100  border transition hover:z-[1] hover:shadow-2xl">
              <div class="relative p-8 space-y-8">
              <span className="text-6xl ">
                  <HiShare />
                </span>

                <div class="space-y-2">
                  <h5 class="text-xl  font-medium transition ">Easy to Share</h5>
                  <p class="text-sm ">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
                </div>
               
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </>
  )
}

export default Features