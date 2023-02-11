import React from 'react'
import { MdImage, MdOutlineOndemandVideo } from 'react-icons/md'
import GalleryCard from './GalleryCard'
import HeadingWrappper from './HeadingWrappper'

const GalleryContainer = ({ gallery_text, gallery }) => {
  return (
    <>
      {
        gallery.length === 0 ? null :
          <div className='mx-[15px] md:mx-[130px] lg:mx-[350px] mb-4'>
            <HeadingWrappper title={gallery_text} icon={<MdImage />} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              {
                gallery.map(item => (
                  <>
                    <GalleryCard {...item} />
                  </>
                ))
              }
            </div>

          </div>
      }
    </>
  )
}

export default GalleryContainer