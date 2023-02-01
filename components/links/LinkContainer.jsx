import React from 'react'
import LinkCard from './LinkCard'

const LinkContainer = ({ links }) => {
  return (
    <div className='mx-[20px] mt-7 lg:mx-[350px]'>
      {
        links.map(item => (<>
          <LinkCard item={item} />
        </>))
      }
    </div>
  )
}

export default LinkContainer