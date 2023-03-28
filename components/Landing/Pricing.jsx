import Link from 'next/link'
import React from 'react'
import { FaCrow, FaKiwiBird } from 'react-icons/fa'

const Pricing = () => {
  return (
    <div >
      <section className="my-20  bg-base-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 lg:text-center">
            {/* <span className="font-bold tracking-wider uppercase dark:text-violet-400">Early user</span> */}
            <h2 className="text-4xl font-bold lg:text-4xl text-primary"> <span className='inline-block lg:text-center mx-2'><FaCrow/></span> Free for early users</h2>
          </div>
          <div className='grid place-items-center'>

          <div className="flex flex-wrap  items-stretch mx-4">
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/2 lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded-lg shadow sm:p-8 bg-primary text-base-100">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Pro</h4>
                  <span className="text-6xl font-bold">Free</span>
                </div>
                <p className="leading-relaxed">Morbi cursus ut sapien sit amet consectetur.</p>
                <ul className="flex-1 space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Phasellus tellus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Praesent faucibus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Aenean et lectus blandit</span>
                  </li>
                </ul>
                <Link href="/register">
                <button type="button" className="px-8 py-3 font-semibold border hover:shadow rounded border-gray-100 text-gray-100">Create Super link</button>
              </Link>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/2 lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-400 dark:text-gray-900">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Pro</h4>
                  <span className="text-6xl font-bold">$5
                    <span className="text-sm tracking-wide">/month</span>
                  </span>
                </div>
                <p className="leading-relaxed">Morbi cursus ut sapien sit amet consectetur.</p>
                <ul className="flex-1 space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Phasellus tellus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Praesent faucibus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Aenean et lectus blandit</span>
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

export default Pricing