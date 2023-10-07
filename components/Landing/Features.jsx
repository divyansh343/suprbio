import prettyNum, {PRECISION_SETTING} from 'pretty-num';
import { FiTrendingUp } from 'react-icons/fi';
import { ImProfile } from 'react-icons/im';
import { HiAtSymbol, HiShare } from 'react-icons/hi';

import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";

const Features = () => {
  return (
    <>
      <div  class="py-8 bg-base-100  overflow-hidden">
        <div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
          <div>
            {/* <span class="text-secondary text-lg font-semibold">Main features</span> */}
            <h2 class="mt-4 text-5xl text-primary font-bold ">
              <span className="inline-block pr-2">
                <FiTrendingUp />
              </span>Supercharge
              Your Online Presense</h2>
          </div>
          <div class="mt-16 grid  divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 gap-3 ">
            <div class="relative group bg-primary text-primary-content  border transition hover:z-[1] hover:shadow-2xl">
              <div class="relative p-8 space-y-8">
                <span className="text-6xl ">
                  <ImProfile />
                </span>
                <div class="space-y-2">
                  <h5 class="text-xl  font-medium transition ">Personal Profile</h5>
                  <p class="text-sm  ">Make your own Url and include it in your Social Media bio.</p>
                </div>
              </div>
            </div>
            <div class="relative group bg-primary text-primary-content  border transition hover:z-[1] hover:shadow-2xl">
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
            <div class="relative group bg-primary text-primary-content  border transition hover:z-[1] hover:shadow-2xl">
              <div class="relative p-8 space-y-8">
                <span className="text-6xl ">
                  <HiShare />
                </span>

                <div class="space-y-2">
                  <h5 class="text-xl  font-medium transition ">Social First</h5>
                  <p class="text-sm ">Cross-link all your social profiles and optimize the engagement across your different channels.</p>
                </div>

              </div>
            </div>

          </div>
          {/* <div class="mt-16 grid  divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 gap-3 ">
            <div class="relative group bg-primary text-primary-content   transition hover:z-[1] hover:shadow-2xl">
              <div class="relative p-8 space-y-8">
                <span className="text-6xl ">
                  <ImProfile />
                </span>
                <div class="space-y-2">
                  <h5 class="text-xl  font-medium transition ">Personal Profile</h5>
                  <p class="text-sm  ">Make your own Url and include it in your Social Media bio.</p>
                </div>
              </div>
            </div>
            <div class="relative group bg-primary text-primary-content   transition hover:z-[1] hover:shadow-2xl">
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
            <div class="relative group bg-primary text-primary-content   transition hover:z-[1] hover:shadow-2xl">
              <div class="relative p-8 space-y-8">
                <span className="text-6xl ">
                  <HiShare />
                </span>

                <div class="space-y-2">
                  <h5 class="text-xl  font-medium transition ">Social First</h5>
                  <p class="text-sm ">Cross-link all your social profiles and optimize the engagement across your different channels.</p>
                </div>

              </div>
            </div>

          </div> */}
          <div className="stats shadow grid place-items-center my-5 ">
            <div className="stat bg-primary text-base-100">
              <div className="stat-figure  text-4xl">
                <FiTrendingUp />
              </div>
              <div className="stat-title">Page Views</div>
              <div className="stat-value ">{prettyNum(12.6) }k
 <span className='inline-block text-lg'> <AiOutlinePlus /> </span>
              </div>
              <div className="stat-desc mt-1">Page Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features