import Link from 'next/link'
import React from 'react'
import { FiHash } from 'react-icons/fi'
import { SiClickup } from 'react-icons/si'
import { getMyDate } from '../../utils/setCookie'

const BioFooter = ({ username, createdAt }) => {
  return (
    <>
      <footer  className="footer  grid place-items-center p-1  text-base-100">
        <div>
          <div>
            {/* <span className='text-secondary text-medium underline'>{username} .</span> */}
            <Link href="/">
              <p className='border-primary border text-primary p-1 my-1 px-2 mx-2 text-xs rounded-[8px] 
              hover:bg-primary
              hover:text-base-100
              cursor-pointer tracking-wide'>
                <span className='inline-block mx-1 text-md'>
                  <FiHash />
                </span>
                Made by
                Suprr
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