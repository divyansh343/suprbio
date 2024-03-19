import Image from 'next/image'
import React from 'react'
import myImg from '../../assets/images/portraits/myimg.jpg'

const Label = () => {
  return (
    <>
      <a  className="fixed bottom-0 right-0 bg-base-200 py-2 px-4 z-50 cursor-pointer rounded-tl-xl border-t border-l border-base-content/20  border-dashed text-sm font-semibold hover:bg-base-200 duration-200 group" href="https://divyanshpal.netlify.app" target="_blank" rel="noreferrer"><div className="flex flex-row justify-center items-center text-center gap-1.5"><div>By <span className="link link-primary">Divyansh</span></div><div className="avatar -mt-1 -mb-1"><div className="relative w-7 rounded-full group-hover:rotate-12 group-hover:scale-110 duration-300">
          <Image
            alt='divyansh'
            height="250"
            src={myImg}
            width="250"
          >
          </Image>
        </div></div></div></a>
    </>
  )
}

export default Label