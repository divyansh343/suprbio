import React from 'react'
import { BsArrowUpRightSquare, BsArrowUpRightSquareFill, BsFillLightningChargeFill, BsFillXDiamondFill } from 'react-icons/bs'
import { IoMdColorPalette } from 'react-icons/io'
import { options } from '../../utils/theme'
import ThemeParticle from './ThemeParticle'

const Themes = () => {
  return (
    <>
      <div class="pt-8 bg-gradient-to-r
    from-base-200
    via-base-300
    to-accent background-animate overflow-hidden">
        <div class="container m-auto px-6  md:px-12">
          <div>
            {/* <span class="text-secondary text-lg font-semibold">Main features</span> */}
            <h2 class="text-3xl md:text-5xl tracking-normal text-primary font-semibold leading-tight md:leading-tight">Theme which suits to your Profile</h2>
          </div>
          <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
            <div class=" grid grid-flow-col grid-rows-2 gap-6 px-6 py-2 -mx-4 md:mx-2 md:px-0 md:grid-rows-2 overflow-x-scroll ">
              {
                options.map(item => (<>
                  <div class="rounded-lg cursor-pointer relative duration-200 w-36 md:w-40 group overflow-hidden">
                    <div class="relative z-30 grid h-24 grid-cols-4 rounded-lg overflow-hidden" data-theme={item.value}>
                      <div class="h-full bg-base-100"></div>
                      <div class="h-full bg-base-200"></div>
                      <div class="h-full bg-base-content"></div>
                      <div class="h-full bg-primary"></div>
                    </div>
                    <span class="absolute z-40 text-xs bottom-1 left-1 text-base-content-secondary backdrop-blur bg-base-100/50 py-0.5 px-1 rounded" data-theme={item.value}>{item.label}</span>

                    <span class="absolute hidden group-hover:block group-focus:block group-focus:animate-shimmer group-focus:bg-[length:300%_300%] -inset-2 bg-gradient rounded animate-opacity"></span>

                    <span class="bg-base-200 absolute hidden group-hover:block group-focus:block -inset-1.5 rounded-sm z-10"></span>
                  </div>
                </>))
              }

            </div>
          </section>
        </div>
      </div>

    </>
  )
}
<section className="p-4 py-6 md:p-8 bg-base-100">
  <div className="max-w-2xl mx-auto mb-16 text-center">
    {/* <span className="font-bold tracking-wider uppercase dark:text-violet-400">Early user</span> */}
    <h2 className="text-4xl font-semibold lg:text-5xl mt-5"><span className='text-primary font-bold'>{options.length - 3} </span> + Themes For Your Profile</h2>
  </div>
  <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
    <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
      {
        options.map(item => (
          <>
            <div key={item.value} data-theme={item.value} className="flex p-4 space-x-4 shadow rounded-lg md:space-x- bg-base-200 ">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-primary">

              </div>
              <div className="flex flex-col justify-center align-middle">
                {/* <p className="text-3xl font-semibold leading-none">200</p> */}
                <p className="capitalize font-semibold">{item.label}</p>
              </div>
            </div>
          </>
        ))
      }

    </div>
  </section>
  {/* <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
          {
            options.map(item => (
              <>
                <ThemeParticle title={item.label} theme={item.value} />
              </>
            ))
          }


        </div> */}
</section>

export default Themes