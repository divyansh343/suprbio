import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import linkImg from '../../assets/images/link.png'
const Hero = () => {
  return (
    <div class="overflow-x-hidden ">
      <section class="h-screen relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-3xl mx-auto text-center">
            <p class="inline-flex px-4 py-2 text-base text-primary border border-secondary rounded-full font-pj">Become Superhero</p>
            <h1 class="mt-5 text-4xl font-bold leading-tight text-primary sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight  tracking-wide">Create Your Suprr Link become
              <span className='pl-4 text-secondary  underline-offset-4 '>
                Superman
              </span>
            </h1>
            <p class="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.
            </p>

            <div class="relative inline-flex mt-10 group">
              <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <Link href="/register">
                <p href="#" title="" class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                  Create Suprr Link <span className='inline-block'><Image className='mx-1' src={linkImg} height={30} width={25} alt="" /></span>
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div class="mt-16 md:mt-20">
          {/* <img class="object-cover object-top w-full h-auto mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100" src="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png" alt="" /> */}
        </div>
      </section>
      <section className='bg-primary h-screen flex justify-center items-center bg-opacity-90	' >
        <div className='grid place-items-center '>
          <p className='text-6xl  font-bold text-base-100 tracking-wide text-center'>
            For Social media Superheros
          </p>
        </div>
      </section>
      <section className='bg-secondary h-screen flex justify-center items-center bg-opacity-90	' >
        <div className='grid place-items-center pt-24'>
          <p className='text-6xl  font-bold text-base-100 tracking-wide text-center'>
            29+ of excellent Profile
               themes
          </p>
        </div>
      </section>

    </div>

  )
}

export default Hero