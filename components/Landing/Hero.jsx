import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import heroImg from '../../assets/images/hero.png'
const Hero = () => {
  return (
    <>
      <div className="relative bg-base-100">
        <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
          <Image height={500} width={500} className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" />
        </div>
        <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
              <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                  <h1 className="text-4xl font-extrabold drop-shadow text-primary sm:text-5xl sm:leading-relaxed tracking-wide md:tracking-normal lg:text-6xl lg:leading-tight font-pj">Create your Suprr profile Link</h1>

                  <div className="mt-8 lg:mt-12 grid place-items-center lg:place-items-start">
                    <div className="avatar-group -space-x-5 ">
                      <div className="avatar">
                        <div className="w-18">
                          <Image height={40} width={40} alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-18">
                          <Image height={40} width={40} alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-18">
                          <Image height={40} width={40} alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-18">
                          <Image height={40} width={40} alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">Join with <span className="font-bold">other</span> social media superheros</p>
                  </div>
                </div>

                <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                  <Link href="/register">
                    <button className="btn mx-1  normal-case tracking-wide btn-primary lg:btn-lg ">Create Suprr Link </button>
                  </Link>
                  <Link href="/login">
                    <button className="btn  normal-case tracking-wide btn-primary lg:btn-lg">Log In</button>
                  </Link>

                  
                </div>
              </div>

              <div className="xl:col-span-3">
                <Image height={530} width={530} className="mx-auto drop-shadow-lg lg:px-20  rounded-xl" src={heroImg} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Hero