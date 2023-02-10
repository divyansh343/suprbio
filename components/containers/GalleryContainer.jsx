import React from 'react'
import { MdImage, MdOutlineOndemandVideo } from 'react-icons/md'
import GalleryCard from './GalleryCard'
import HeadingWrappper from './HeadingWrappper'

const GalleryContainer = () => {
  return (
    <>
      <div className='mx-[20px] md:mx-[130px] lg:mx-[350px] mb-4'>
        <HeadingWrappper title="Gallery" icon={<MdImage />} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

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