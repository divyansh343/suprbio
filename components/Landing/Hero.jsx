import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import heroImg from '../../assets/images/hero.png'
const Hero = () => {
  return (
    <>

      <div class="relative bg-base-100">
        <div class="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
          <Image height={500} width={500} class="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" />
        </div>
        <section class="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
          <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
              <div class="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                <div class="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                  <h1 class="text-4xl font-bold text-primary sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Create your Suprr profile Link</h1>

                  <div class="mt-8 lg:mt-12 grid place-items-center lg:place-items-start">
                    <div className="avatar-group -space-x-6 ">
                      <div className="avatar">
                        <div className="w-18">
                          <Image height={50} width={50} alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-18">
                          <Image height={50} width={50} alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-18">
                          <Image height={50} width={50} alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-18">
                          <Image height={50} width={50} alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
                        </div>
                      </div>
                    </div>

                    <p class="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">Join with <span class="font-bold">4600+ Developers</span> and start getting feedbacks right now</p>
                  </div>
                </div>

                <div class="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-gray-600"
                    role="button"
                  >
                    Get feedback
                  </a>
                  <Link href="/register">
                    <p
                      class="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justif-center rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200"
                      role="button"
                    >
                      <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                      Login Suprr profile                  </p>
                  </Link>
                </div>
              </div>

              <div class="xl:col-span-3">
                <Image height={300} width={200} class="w-full mx-auto drop-shadow-lg lg:px-20 rounded-xl" src={heroImg} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Hero