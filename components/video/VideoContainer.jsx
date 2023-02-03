import React from 'react'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import HeadingWrappper from '../containers/HeadingWrappper'
import Card from './Card'

const VideoContainer = ({ videos }) => {
  return (
    <>
      <div className='mx-[20px] lg:mx-[250px] my-5'>
        <HeadingWrappper title="Videos" icon={<MdOutlineOndemandVideo />} />
        <div className='grid lg:grid-cols-3 gap-5 '>
          {videos.map(item => (
            <>
              <Card
              video_thumbnail={item.video_thumbnail} 
              video_title={item.video_title} 
              />
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default VideoContainer