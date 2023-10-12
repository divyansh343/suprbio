import React from 'react'
import { CiInstagram, CiLinkedin, CiShare1, CiTwitter, CiYoutube } from 'react-icons/ci';
import { SlSocialSpotify } from 'react-icons/sl';
import { BsMedium } from 'react-icons/bs';
import { SiDevdotto } from 'react-icons/si'
import { MdEmail } from 'react-icons/md';


const Social = ({ spotify, twitter, instagram, linkdin, youtube, medium, dev, site, email }) => {
  return (
    <>
      <div className='mx-[15px] lg:mx-[340px] grid mt-1 lg:mt-1 place-items-center '>
        <div className='grid-flow-col gap-2'>
          {/* <SocialWrapper link={site} item={logo_site} /> */}

          {
            site === undefined || site.length === 0 ? null :
              <div className='text-2xl lg:text3xl text-blue-600 saturate-150 inline-block cursor-pointer mx-2
          lg:mx-3 hover:animate-pulse px-1 lg:px-2
      hover:scale-105
      '>
                <a href={site} className="btn btn-ghost btn-circle grid place-items-center text-4xl text-primary" target='_blank' rel="noreferrer">
                  <CiShare1 />
                  {/* <Image className='grid place-items-center ' src={item} height={28} width={28} alt="" /> */}
                </a>
              </div>
          }

          {
            twitter === undefined || twitter.length === 0 ? null :
              <div className='text-2xl lg:text3xl text-blue-600 saturate-150 inline-block cursor-pointer mx-2
          lg:mx-3 hover:animate-pulse px-1 lg:px-2
      hover:scale-105
      '>
                <a href={twitter} className="btn btn-ghost btn-circle grid place-items-center text-4xl text-primary" target='_blank' rel="noreferrer">
                  <CiTwitter />
                  {/* <Image className='grid place-items-center ' src={item} height={28} width={28} alt="" /> */}
                </a>
              </div>
          }
          {
            linkdin === undefined || linkdin.length === 0 ? null :
              <div className='text-2xl lg:text3xl text-blue-600 saturate-150 inline-block cursor-pointer mx-2
          lg:mx-3 hover:animate-pulse px-1 lg:px-2
      hover:scale-105
      '>
                <a href={linkdin} className="btn btn-ghost btn-circle grid place-items-center text-4xl text-primary" target='_blank' rel="noreferrer">
                  <CiLinkedin />
                  {/* <Image className='grid place-items-center ' src={item} height={28} width={28} alt="" /> */}
                </a>
              </div>
          }
          {
            instagram === undefined || instagram.length === 0 ? null :
              <div className='text-2xl lg:text3xl text-blue-600 saturate-150 inline-block cursor-pointer mx-2
          lg:mx-3 hover:animate-pulse px-1 lg:px-2
      hover:scale-105
      '>
                <a href={instagram} className="btn btn-ghost btn-circle grid place-items-center text-4xl text-primary" target='_blank' rel="noreferrer">
                  <CiInstagram />
                  {/* <Image className='grid place-items-center ' src={item} height={28} width={28} alt="" /> */}
                </a>
              </div>
          }
          {
            youtube === undefined || youtube.length === 0 ? null :
              <div className='text-2xl lg:text3xl text-blue-600 saturate-150 inline-block cursor-pointer mx-2
          lg:mx-3 hover:animate-pulse px-1 lg:px-2
      hover:scale-105
      '>
                <a href={youtube} className="btn btn-ghost btn-circle grid place-items-center text-4xl text-primary" target='_blank' rel="noreferrer">
                  <CiYoutube />
                  {/* <Image className='grid place-items-center ' src={item} height={28} width={28} alt="" /> */}
                </a>
              </div>
          }
          {
            spotify === undefined || spotify.length === 0 ? null :
              <div className='text-2xl lg:text3xl text-blue-600 saturate-150 inline-block cursor-pointer mx-2
          lg:mx-3 hover:animate-pulse px-1 lg:px-2
      hover:scale-105
      '>
                <a href={spotify} className="btn btn-ghost btn-circle grid place-items-center text-3xl text-primary" target='_blank' rel="noreferrer">
                  <SlSocialSpotify />
                  {/* <Image className='grid place-items-center ' src={item} height={28} width={28} alt="" /> */}
                </a>
              </div>
          }
          {
            medium === undefined || medium.length === 0 ? null :
              <div className='text-2xl lg:text3xl text-blue-600 saturate-150 inline-block cursor-pointer mx-2
          lg:mx-3 hover:animate-pulse px-1 lg:px-2
      hover:scale-105
      '>
                <a href={medium} className="btn btn-ghost btn-circle grid place-items-center text-4xl text-primary" target='_blank' rel="noreferrer">
                  <BsMedium />
                  {/* <Image className='grid place-items-center ' src={item} height={28} width={28} alt="" /> */}
                </a>
              </div>
          }
          {
            dev === undefined || dev.length === 0 ? null :
              <div className='text-2xl lg:text3xl text-blue-600 saturate-150 inline-block cursor-pointer mx-2
          lg:mx-3 hover:animate-pulse px-1 lg:px-2
      hover:scale-105
      '>
                <a href={dev} className="btn btn-ghost btn-circle grid place-items-center text-4xl text-primary" target='_blank' rel="noreferrer">
                  <SiDevdotto />
                  {/* <Image className='grid place-items-center ' src={item} height={28} width={28} alt="" /> */}
                </a>
              </div>
          }
          {
            email === undefined || email.length === 0 ? null :
              <div className='text-2xl lg:text3xl text-blue-600 saturate-150 inline-block cursor-pointer mx-2
          lg:mx-3 hover:animate-pulse px-1 lg:px-2
      hover:scale-105
      '>
                <a href={`mailto:${email}`} className="btn btn-ghost btn-circle grid place-items-center text-4xl text-primary" target='_blank' rel="noreferrer">
                  <MdEmail />
                  {/* <Image className='grid place-items-center ' src={item} height={28} width={28} alt="" /> */}
                </a>
              </div>
          }

        </div>
      </div>
    </>
  )
}

export default Social