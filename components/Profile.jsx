import React from 'react'
import Avatar from './Profile/Avatar'
import Bio from './Profile/Bio'
import LinkContainer from './links/LinkContainer';
import Name from './Profile/Name';

import Social from './Profile/Social';
import VideoContainer from '../components/video/VideoContainer';
import BioNav from './Layout/BioNav';
import GalleryContainer from './containers/GalleryContainer';

const Profile = ({ username, name, bio, verified, theme, links, videos, socials, avatar }) => {

  return (
    <div data-theme={theme}>
      <div className=''>
        <div className='grid place-items-center'>
          <div>
            <BioNav username={username} />
            <Avatar avatar={avatar} />
            <Name name={name} verified={verified} username={username} />
            <Bio bio={bio} />
            <Social {...socials} />
            <LinkContainer links={links} />
            <VideoContainer videos={videos} />
            <GalleryContainer />

          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile