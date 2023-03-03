import Image from 'next/image'
import React from 'react'
import artImage from '../../assets/images/power.png'
const ThemeParticle = ({theme,title}) => {
  return (
    <>
      <div data-theme={theme} className="flex overflow-hidden rounded-lg bg-primary drop-shadow">
        <div className="flex items-center justify-center px-4 bg-secondary text-gray-800">
          <Image src={artImage} height={30} width={30} alt="" />
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
            <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
            <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
            <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
          </svg> */}
        </div>
        <div className="flex items-center justify-between flex-1 p-3">
          <p className="text-2xl text-base-100 uppercase drop-shadow font-normal">{title}</p>
          <p></p>
        </div>
      </div>
    </>
  )
}

export default ThemeParticle