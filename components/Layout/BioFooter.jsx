import Link from 'next/link'
import React from 'react'
import { SiClickup } from 'react-icons/si'
import { getMyDate } from '../../utils/setCookie'

const BioFooter = ({ username, createdAt }) => {
  return (
    <>
      <footer  className="footer footer-center p-1 bg-base-300 text-base-100">
        <div>
          <div>
            {/* <span className='text-secondary text-medium underline'>{username} .</span> */}
            <Link href="/">
              <p className='bg-primary p-1 px-2 mx-2 rounded-[8px] hover:scale-105 cursor-pointer'>
                <span className='inline-block mx-1  animate-pulse'>
                  <SiClickup />
                </span>
                Create your Suprr.link/name
                <span>
                  {/* joined from {getMyDate(createdAt)} */}
                </span>
              </p>
            </Link>

          </div>
        </div>
      </footer>
    </>
  )
}

export default BioFooter