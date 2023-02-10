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
import Image from 'next/image';
import ServiceContainer from './containers/ServiceContainer';

const Profile = ({ username, name, bio, verified, theme, links_text, links, videos, socials, avatar, video_text, email, createdAT }) => {

  
  
  return (
    <div data-theme={theme}>
      <div className=''>
        <div className='grid place-items-center'>
          <div>
            <BioNav username={username} email={email} avatar={avatar} />
            <Avatar avatar={avatar} />
            <Name name={name} verified={verified} username={username} />
            <Bio bio={bio} />
            <Social {...socials} />
            <LinkContainer links={links} links_text={links_text} />
            <ServiceContainer />
            <VideoContainer videos={videos} video_text={video_text} />
            <GalleryContainer />

            <BioFooter username={username} createdAT={createdAT} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile