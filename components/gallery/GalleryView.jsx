import React from 'react'
import BioFooter from '../Layout/BioFooter';
import BioNav from '../Layout/BioNav';

const GalleryView = ({ gallery, theme, username, avatar, email }) => {
  // console.log(gallery);
  return (
    <>
      <div data-theme={theme}>
       
        <BioNav username={username} email={email} avatar={avatar} />

        <div className='grid place-items-center'>
          <div>

          </div>
        </div>
        <BioFooter username={username} />
      </div>
    </>
  )
}

export default GalleryView