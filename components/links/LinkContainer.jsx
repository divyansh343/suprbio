import React from 'react'
import { SiChainlink, SiLinktree } from 'react-icons/si'
import HeadingWrappper from '../containers/HeadingWrappper'
import LinkCard from './LinkCard'

const LinkContainer = ({ links,links_text }) => {
  return (
    <>
      {
        links.length === 0 ? null :
          <div className='mx-[15px] mt-3 mb-14 md:mx-[130px] lg:mx-[350px] pb-40 lg:pb-5'>
            <HeadingWrappper title={links_text} icon={<SiLinktree />} />
            {
              links.map(item => (<>
                <LinkCard key={item?.id} item={item} />
              </>))
            }
          </div>

      }
    </>

  )
}

export default LinkContainer