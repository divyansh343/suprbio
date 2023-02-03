import React from 'react'
import logo_twitter from '../../assets/images/twitter.png'
import logo_yt from '../../assets/images/yt.png'
import logo_medium from '../../assets/images/medium.png'
import logo_instagram from '../../assets/images/instagram.png'
import logo_linkdin from '../../assets/images/linkdin.png'
import logo_dev from '../../assets/images/dev.png'

import SocialWrapper from '../containers/SocialWrapper'

const Social = ({twitter, instagram, linkdin, youtube, medium, dev}) => {
  return (
    <>
      <div className='mx-[20px] lg:mx-[340px] grid mt-2 place-items-center '>
        <div className='grid-flow-col gap-2'>
          <SocialWrapper link={twitter} item={logo_twitter} />
          <SocialWrapper link={instagram} item={logo_instagram} />
          <SocialWrapper link={linkdin} item={logo_linkdin} />
          <SocialWrapper link={youtube} item={logo_yt} />
          <SocialWrapper link={medium} item={logo_medium} />
          <SocialWrapper link={dev} item={logo_dev} />
        </div>
      </div>
    </>
  )
}

export default Social