import Image from 'next/image'
import React from 'react'
import galleryImg from '../../assets/images/gal.jpg'
const GalleryCard = ({imgUrl, img_title}) => {
  return (
    <>
    {
      imgUrl ? 
      <div className='cursor-pointer saturate-150'>
        <div>
          <Image priority className='rounded-[11px] border hover:shadow  border-secondary p-1 ' src={imgUrl} height={400} width={400} alt={img_title} />
        </div>
      </div> : null
    }
    </>
  )
}

export default GalleryCard