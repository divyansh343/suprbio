import LinkContainer from '../links/LinkContainer';
import Name from '../Profile/Name';
import Social from '../Profile/Social';
import BioNav from '../Layout/BioNav';
import Avatar from '../Profile/Avatar';
import Bio from '../Profile/Bio';
import LinkCard from '../links/LinkCard'
import Image from 'next/image';

const Profile = ({ username, name, bio, verified, theme, links_text, videos, video_text, email, createdAT, gallery_text, gallery }) => {

  const avatar = {
    url: "https://res.cloudinary.com/the-social-charts/image/upload/v1679283141/avatars/ijvkengjlokrklonfkh1.jpg"
  }
  const links = [
    {
      title: "Tickets | Foodies Festival - St Albans",
      url: "/",
    },

    {
      title: "Listen: Home Session on Apple Music",
      url: "dfsdfdfsdfs",
    },
    {
      title: "Watch 'Nothing Missing' Music Video",
      url: "dfsdfdfsdfs",
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

  return (
    <div className='max-h-max' >
      <div className=' mt-10'>
        <div className='px-[5px] md:mx-[120px] lg:mx-[160px]'>
          <div data-theme={theme} className='shadow-xl rounded-xl py-[10px]'>

            {/* Avatar */}
            <div className=" mt-[20px] lg:mt-[30px] grid place-items-center">
              <div className="avatar">
                <div className="w-20 lg:w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image priority height={60} width={60} alt="" src={avatar ? avatar.url : user} />
                </div>
              </div>
            </div>
            {/* Avatar */}

            <Name name={"Natalie Imbruglia"} verified={verified} username={"NatalieImbruglia"} />
            <div className=' saturate-150 cursor-pointer'>
              <div className=' drop-shadow-sm border-opacity-70  rounded-[7px] px-3 py-2 lg:px-3 '>
                <p className='text-[15px] lg:text-[16px]  text-center tracking-wide'>
                  Australian singer and actress.
                </p>
              </div>
            </div>
            {/* <Social spotify="dsfdsfdsfd" twitter="fdfsdfs" instagram="fjfjlds" linkdin="dfds" /> */}

            <div className='px-[10px]'>
              {
                links.map(item => (<>
                  <LinkCard key={item?.id} item={item} />
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