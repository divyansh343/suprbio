import React from 'react'
import Avatar from './Profile/Avatar'
import Bio from './Profile/Bio'
import LinkContainer from './links/LinkContainer';
import Name from './Profile/Name';

import Social from './Profile/Social';
import VideoContainer from '../components/video/VideoContainer';
import BioNav from './Layout/BioNav';


const Profile = ({ username, name, bio, verified, theme, links, videos, socials }) => {

  return (
    <div data-theme={theme}>
      <div className=''>
        <div className='grid place-items-center'>
          <div>
            <BioNav username={username} />
            <Avatar />
            <Name name={name} verified={verified} username={username} />
            <Bio bio={bio} />
            <Social {...socials} />
            {/* <div className='mx-[20px] lg:mx'>
              <div>
                <div className=''>

                </div>
              </div>
            </div> */}
            <LinkContainer links={links} />
            {/* <VideoContainer videos={videos} /> */}


          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile