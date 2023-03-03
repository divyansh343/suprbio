import React from 'react'
import { options } from '../../utils/theme'
import ThemeParticle from './ThemeParticle'

const Themes = () => {
  return (
    <>
      <section className="p-4 py-6 md:p-8 bg-base-100">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          {/* <span className="font-bold tracking-wider uppercase dark:text-violet-400">Early user</span> */}
          <h2  className="text-4xl font-semibold lg:text-5xl mt-5"><span className='text-primary font-bold'>{options.length} </span>+ themes for your profile</h2>
        </div>
        <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
          {
            options.map(item => (
              <>
                <ThemeParticle title={item.label} theme={item.value} />
              </>
            ))
          }


        </div>
      </section>
    </>
  )
}

export default Themes