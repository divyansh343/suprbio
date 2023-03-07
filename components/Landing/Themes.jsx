import React from 'react'
import { options } from '../../utils/theme'
import ThemeParticle from './ThemeParticle'

const Themes = () => {
  return (
    <>
      <section className="p-4 py-6 md:p-8 bg-base-100">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          {/* <span className="font-bold tracking-wider uppercase dark:text-violet-400">Early user</span> */}
          <h2 className="text-4xl font-semibold lg:text-5xl mt-5"><span className='text-primary font-bold'>{options.length} </span>+ themes for your profile</h2>
        </div>
        <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
          <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            {
              options.map(item => (
                <>
                  {/* <ThemeParticle title={item.label} theme={item.value} /> */}
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
    </>
  )
}

export default Themes