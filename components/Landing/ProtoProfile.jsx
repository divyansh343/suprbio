import LinkContainer from '../links/LinkContainer';
import Name from '../Profile/Name';
import Social from '../Profile/Social';
import BioNav from '../Layout/BioNav';
import Avatar from '../Profile/Avatar';
import Bio from '../Profile/Bio';
import LinkCard from '../links/LinkCard'
import Image from 'next/image';
import fiveImg from '../../assets/images/portraits/six.jpg'
import { SiDevdotto } from 'react-icons/si';
import { BsMedium } from 'react-icons/bs';
import { SlSocialSpotify } from 'react-icons/sl';
import { CiInstagram, CiLinkedin, CiShare1, CiTwitter, CiYoutube } from 'react-icons/ci';
import { FiShare } from 'react-icons/fi';
import Link from 'next/link';

const Profile = ({ username, name, bio, verified, theme, links_text, videos, video_text, email, createdAT, gallery_text, gallery }) => {

  const avatar = {
    url: fiveImg
  }
  const links = [
    {
      title: "↘️ Brandstart - Branding Agency",
      url: "https://brandstart.live",
    },

    {
      title: "🔥 Indiemake - Resources for indiemakers",
      url: "https://indiemake.co",
    },
    {
      title: "⚡ Create your Suprr link like mine!",
      url: "https://suprr.link",
    },
    {
      title: "Watch 'Nothing Missing' Music Video",
      url: "dfsdfdfsdfs",
    },
    // {
    //   title: "Watch 'Nothing Missing' Music Video",
    //   url: "dfsdfdfsdfs",
    // },

  ]
  const spotify = "ddfsfds";
  const instagram = "ddfsfds";
  const site = "ddfsfds";
  const youtube = "ddfsfds";
  const twitter = "ddfsfds";

  return (
    <div className='max-h-max' >
      <div className=' mt-2'>
        <div className='px-[5px] md:mx-[120px] lg:mx-[160px]'>
          <div data-theme={theme} className='shadow-xl bg-opacity-95 rounded-xl py-[10px]'>
            <div className=" grid relative place-items-end p-6">
              <label className=" absolute right-4 top-1 btn btn-ghost btn-circle bg-primary btn-primary avatar
            ">
              <Link href="/divyansh">
                <div className="w-9 text-lg lg:text-lg text-base-100 grid place-items-center p-2 rounded-full">
                  <FiShare />
                </div>
              </Link>
              </label>
            </div>
            {/* Avatar */}
            <div className="grid place-items-center">
              <div className="avatar">
                <div className="w-20 lg:w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image priority height={100} width={100} alt="" src={avatar ? avatar.url : user} />
                </div>
              </div>
            </div>
            {/* Avatar */}

            <Name name={"Divyansh Pal"} verified={verified} username={"divyansh"} />
            <div className=' saturate-150 cursor-pointer'>
              <div className=' drop-shadow-sm border-opacity-70  rounded-[7px] px-3 py-2 lg:px-3 '>
                <p className='text-[15px] lg:text-[16px]  text-center tracking-wide'>
                  Aussie, Main Lead in Jhonny English
                </p>
              </div>
            </div>

            {/* social */}
            <div className='place-items-center'>
              <div className='grid grid-flow-col  mx-3'>
                {/* <SocialWrapper link={site} item={logo_site} /> */}

                {
                  twitter === undefined || twitter.length === 0 ? null :
                    <div className='text-2xl lg:text3xl text-blue-600 saturate-150 inline-block cursor-pointer mx-2
          lg:mx-3 hover:animate-pulse px-1 lg:px-2
      hover:scale-105
      '>
                      <a className="btn btn-ghost btn-circle grid place-items-center text-4xl text-primary" target='_blank' rel="noreferrer">
                        <CiShare1 />
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
                      <a className="btn btn-ghost btn-circle grid place-items-center text-4xl text-primary" target='_blank' rel="noreferrer">
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
                      <a className="btn btn-ghost btn-circle grid place-items-center text-4xl text-primary" target='_blank' rel="noreferrer">
                        <CiLinkedin />
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
                      <a className="btn btn-ghost btn-circle grid place-items-center text-3xl text-primary" target='_blank' rel="noreferrer">
                        <SlSocialSpotify />
                        {/* <Image className='grid place-items-center ' src={item} height={28} width={28} alt="" /> */}
                      </a>
                    </div>
                }


              </div>
            </div>

            {/* social */}

            <div className='mx-[10px]'>
              {
                links.map(item => (<>
                  <a key={item?.id} target="_blank" rel='noreferrer'>
                    <div className=' cursor-pointer border border-primary hover:shadow hover:bg-primary grid place-items-center my-3 text-primary font-medium hover:text-base-100 border-opacity-70 rounded-xl  '>
                      <p className='text-[13px] lg:text-[16px] 
          px-2 py-2 lg:px-3
          text-center tracking-wide'>
                        {item?.title}
                      </p>
                    </div>
                  </a>
                </>))
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile