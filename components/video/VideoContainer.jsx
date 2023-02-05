import Image from 'next/image'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import HeadingWrappper from '../containers/HeadingWrappper'
import Card from './Card'

const VideoContainer = ({ videos }) => {
  return (
    <>
      <div className='mx-[20px] lg:mx-[340px] my-5'>
      <HeadingWrappper title="Videos" icon={<MdOutlineOndemandVideo />} />

        {videos.map(item => (
          <>
            <Card
              video_thumbnail={item.video_thumbnail}
              video_title={item.video_title}
            />
          </>
        ))}
      </div>

    </>
  )
}

export default VideoContainer