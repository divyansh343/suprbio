import Link from 'next/link'
import React from 'react'
import { FaCrow, FaKiwiBird } from 'react-icons/fa'
import { BiBoltCircle } from 'react-icons/bi';
import { FiZap } from 'react-icons/fi';

const Pricing = () => {
  return (
    <div id='pricing' >
      <section className="my-20 ">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 lg:text-center">
            {/* <span className="font-bold tracking-wider uppercase dark:text-violet-400">Early user</span> */}
            <h2 className="text-4xl font-bold lg:text-4xl text-primary"> <span className='inline-block lg:text-center mx-2'><FaCrow /></span> Free for early users</h2>
          </div>
          <div className='grid place-items-center'>

            <div className="flex flex-wrap  items-stretch mx-4">
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/2 lg:mb-0">
                <div className="flex flex-col p-6 space-y-6 rounded-lg shadow sm:p-8 bg-primary text-base-100">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Pro</h4>
                    <span className="text-6xl font-bold">Free</span>
                  </div>
                  <p className="leading-relaxed">Everrything In Free For Early Users</p>
                  <ul className="flex-1 space-y-2">
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Custom Username </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Protected Links</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>16+ themes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className='inline-block text-2xl'><BiBoltCircle /></span>

                      <span>Blogs </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className='inline-block text-2xl'><BiBoltCircle /></span>

                      <span>Newsletter </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className='inline-block text-2xl'><BiBoltCircle /></span>
                      <span>Custom Pages </span>
                    </li>
                  </ul>
                  <Link href="/register">
                    {/* <button type="button" className="px-8 py-3 font-semibold border hover:shadow rounded border-gray-100 text-gray-100">Create Super link</button> */}
                    <button className="btn btn-white tracking-wide border normal-case text-lg">      <span className='px-1'><FiZap /></span>Create Super link</button>
                  </Link>
                </div>
              </div>
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/2 lg:mb-0">
                <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-400 dark:text-gray-900">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Professional</h4>
                    <span className="text-6xl font-bold">$5
                      <span className="text-sm tracking-wide">/month</span>
                    </span>
                  </div>
                  <p className="leading-relaxed">Free + Professional Plan is Coming Soon</p>
                  <ul className="flex-1 space-y-2">
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Custom Username </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Protected Links</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>16+ themes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className='inline-block text-2xl'><BiBoltCircle /></span>

                      <span>Blogs </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className='inline-block text-2xl'><BiBoltCircle /></span>

                      <span>Newsletter </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className='inline-block text-2xl'><BiBoltCircle /></span>
                      <span>Custom Pages </span>
                    </li>
                  </ul>
                  {/* <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-800 dark:text-violet-400">Get Started</a> */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
<section class="max-w-4xl lg:h-screen mt-20 mx-auto p-4 space-y-12">
  <h2 class="font-extrabold text-4xl md:text-5xl tracking-tight md:text-center  ">
    Level up your profile</h2>
  <div class="flex flex-col md:flex-row justify-center gap-12">
    <div class="p-8 bg-base-100 rounded-3xl space-y-4 border-2 basis-1/2">
      <p class="text-lg font-semibold">Discover</p>
      <p class="text-base-content/80">Start free and see how it works for you</p>
      <div class="text-4xl font-extrabold tracking-tight">Free</div>
      <div class="btn btn-prtext-primary btn-block btn-outline" href="/signup">

        Get started</div>
      <ul className="flex-1 space-y-2">
        <li className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span>Custom Username </span>
        </li>
        <li className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span>Protected Links</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span>16+ themes</span>
        </li>
        <li className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span>Analytics</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className='inline-block text-2xl'><BiBoltCircle /></span>

          <span>Blogs </span>
        </li>
        <li className="flex items-center space-x-2">
          <span className='inline-block text-2xl'><BiBoltCircle /></span>

          <span>Newsletter </span>
        </li>
        <li className="flex items-center space-x-2">
          <span className='inline-block text-2xl'><BiBoltCircle /></span>
          <span>Custom Pages </span>
        </li>
      </ul>
    </div><div class="p-8 bg-base-100 rounded-3xl space-y-4 border-2 border-primary/80 basis-1/2">
      <p class="text-lg font-semibold text-primary">Premium</p>
      <p class="text-base-content/80">Take your workouts to the next level</p>
      <div class="flex items-end gap-2">
        <div class="text-4xl font-extrabold tracking-tight">$5</div>
        <div class="font-medium text-sm text-base-content/80">Pay once, unlock forever</div>
      </div>

      <div class="btn btn-primary btn-block" href="/signup">Coming Soon</div>
      <ul class="space-y-4 text-base-content/80"><li class="font-medium">Everything on discover, plus...</li><li class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline text-primary"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg> Unlimited workout avatar</li><li class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 inline text-primary"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg> Compete on all leaderboards</li></ul>
    </div></div></section>

export default Pricing