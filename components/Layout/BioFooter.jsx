import React from 'react'
import { SiClickup } from 'react-icons/si'

const BioFooter = ({ username }) => {
  return (
    <>
      <footer className="footer footer-center p-2 bg-base-300 text-base-100">
        <div>
          <p>
            {/* <span className='text-secondary text-medium underline'>{username} .</span> */}
            <span className='bg-secondary p-1 px-2 mx-2 rounded-[15px] hover:bg-primary cursor-pointer'>
              <span className='inline-block mx-1  animate-pulse'>
                <SiClickup />
              </span>
              Create your Suprr.link/@name
            </span>

          </p>
        </div>
      </footer>
    </>
  )
}

export default BioFooter