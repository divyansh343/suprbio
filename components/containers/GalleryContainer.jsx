import React from 'react'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import GalleryCard from './GalleryCard'
import HeadingWrappper from './HeadingWrappper'

const GalleryContainer = () => {
  return (
    <>
      <div className='mx-[20px] lg:mx-[320px]'>
        <HeadingWrappper title="Gallery" icon={<MdOutlineOndemandVideo />} />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>

        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />



        </div>
      </div>

    </>
  )
}

export default GalleryContainer