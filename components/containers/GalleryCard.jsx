import Image from 'next/image'
import React from 'react'
import galleryImg from '../../assets/images/gal.jpg'
const GalleryCard = () => {
  return (
    <>
      <div className='cursor-pointer saturate-150'>
        <div>
          <Image priority className='rounded-[12px] border hover:shadow  border-secondary p-1 ' src={galleryImg} height={400} width={400} alt="" />
        </div>
        {/* <div className='p-2'>
          <p className='font-medium text-[18px]'>
            Lorem ipsum dolor sit amet
          </p>
        </div> */}
      </div>
    </>
  )
}

export default GalleryCard