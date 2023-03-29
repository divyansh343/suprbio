import React from 'react'
import Avatar from './Profile/Avatar'
import Bio from './Profile/Bio'
import LinkContainer from './links/LinkContainer';
import Name from './Profile/Name';

import Social from './Profile/Social';
import VideoContainer from '../components/video/VideoContainer';
import BioNav from './Layout/BioNav';
import GalleryContainer from './containers/GalleryContainer';
import BioFooter from './Layout/BioFooter';
import ReactPlayer from 'react-player/youtube'
import ServiceContainer from './containers/ServiceContainer';
import Link from 'next/link';

const Profile = ({ username, name, bio, verified, theme, links_text, links, videos, socials, avatar, video_text, email, createdAT, gallery_text, gallery }) => {

const sp = "bottom";

  return (
    <div className='max-h-max bg-opacity-95' data-theme={theme}>
      <div className=' '>
        <div className='grid place-items-center'>
          <div>
            <BioNav username={username} email={email} avatar={avatar} />
            <Avatar avatar={avatar} />
            <Name name={name} verified={verified} username={username} />
            <Bio bio={bio} />
            {
              sp !== "bottom" ? 
              <Social {...socials} />:null
            }
            <LinkContainer links={links} links_text={links_text} />
            {
              sp === "bottom" ? 
              <Social {...socials} />:null
            }
            {/* <ServiceContainer />
            <VideoContainer videos={videos} video_text={video_text} />
            <GalleryContainer gallery_text={gallery_text} gallery={gallery} /> */}
            <div>
              {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
              {/* <Link href={`/${username}/gallery`}>
                dsf
              </Link> */}

            </div>
          </div>
        </div>
      </div>
      <BioFooter username={username} createdAT={createdAT} />
    </div>

  )
}

export default Profile