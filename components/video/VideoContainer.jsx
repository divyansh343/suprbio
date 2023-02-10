import Image from 'next/image'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { MdOutlineOndemandVideo, MdVideoCameraBack, MdVideoLabel, MdVideoLibrary } from 'react-icons/md'
import HeadingWrappper from '../containers/HeadingWrappper'
import Card from './Card'

const VideoContainer = ({ videos, video_text }) => {
  return (
    <>
      <div className='mx-[20px] md:mx-[130px] lg:mx-[350px] my-5'>
      <HeadingWrappper title={video_text} icon={<MdVideoLibrary/>} />

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