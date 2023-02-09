import React from 'react'
import { SiChainlink, SiLinktree } from 'react-icons/si'
import HeadingWrappper from '../containers/HeadingWrappper'
import LinkCard from './LinkCard'

const LinkContainer = ({ links }) => {
  return (
    <>
      {
        links.length === 0 ? null :
          <div className='mx-[20px] mt-7 md:mx-[130px] lg:mx-[350px]'>
            <HeadingWrappper title="links" icon={<SiLinktree />} />
            {
              links.map(item => (<>
                <LinkCard item={item} />
              </>))
            }
          </div>

      }
    </>

  )
}

export default LinkContainer