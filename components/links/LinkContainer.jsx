import React from 'react'
import { SiChainlink, SiLinktree } from 'react-icons/si'
import HeadingWrappper from '../containers/HeadingWrappper'
import LinkCard from './LinkCard'
import { VscLink } from 'react-icons/vsc'

const LinkContainer = ({ links, links_text }) => {
  return (
    <>
      <div class="divider"></div>
      {
        links.length === 0 ? null :
          <div className='mx-[15px]  mb-14 md:mx-[130px] lg:mx-[350px] lg:pb-5'>
            <HeadingWrappper title={links_text} icon={<VscLink />} />
            <ul class="space-y-3 lg:space-y-4">
              {
                links.map(item => (<>
                  <LinkCard key={item?.id} item={item} />
                </>))
              }
            </ul>
          </div>
      }
    </>

  )
}

export default LinkContainer