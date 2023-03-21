import LinkContainer from '../links/LinkContainer';
import Name from '../Profile/Name';
import Social from '../Profile/Social';
import BioNav from '../Layout/BioNav';
import Avatar from '../Profile/Avatar';
import Bio from '../Profile/Bio';

const Profile = ({ username, name, bio, verified, theme, links_text, links, videos, socials, avatar, video_text, email, createdAT, gallery_text, gallery }) => {


  return (
    <div className='max-h-max' data-theme={theme}>
      <div className=' '>
        <div className='grid place-items-center'>
          <div>
            <Avatar avatar={avatar} />
            <Name name={name} verified={verified} username={username} />
            <Bio bio={bio} />
            <Social {...socials} />
            {/* <LinkContainer links={links} links_text={links_text} /> */}
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile