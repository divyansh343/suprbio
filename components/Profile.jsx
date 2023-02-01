import React from 'react'
import Avatar from './Profile/Avatar'
import Bio from './Profile/Bio'
import LinkContainer from './links/LinkContainer';
import Name from './Profile/Name';
import Image from 'next/image';
import VideoCard from './video/videoCard';

const Profile = ({ username, name, bio, verified, theme, links, }) => {
  console.log(theme);
  return (
    <html data-theme={theme ? theme : "wireframe"}>
      <div className=''>
        <div className='grid place-items-center'>
          <div>

            <Avatar />
            <Name name={name} verified={verified} username={username} />
            <Bio bio={bio} />

            <div className='mx-[20px] lg:mx-[250px] my-5'>
              <div className='my-6'>
                <p className='text-xl font-semibold tracking-wide decoration-red-700'>
                  Videos
                </p>
              </div>
              <div className='grid lg:grid-cols-3 gap-5 '>
               <VideoCard />
               <VideoCard />
               <VideoCard />
               
              
               

              </div>
            </div>
            <LinkContainer links={links} />

          </div>
        </div>
      </div>
    </html>

  )
}

export default Profile