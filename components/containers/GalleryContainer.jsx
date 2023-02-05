import React from 'react'
import GalleryCard from './GalleryCard'

const GalleryContainer = () => {
  return (
    <>
      <div className='mx-[20px] lg:mx-[320px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

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