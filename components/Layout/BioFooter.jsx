import Link from 'next/link'
import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { TbGrowth } from 'react-icons/tb'
import { FiHash, FiTrendingUp } from 'react-icons/fi'
import { HiChevronDoubleUp, HiUserGroup } from 'react-icons/hi'


const BioFooter = ({ username, createdAt, visitorCount, links }) => {
  return (
    <>
      <footer className={` ${links.length >= 7 ? " footer" : "footer-gg"}  grid place-items-center p-1  text-base-100`}>
        <div>
          <div>
            {/* <span className='text-secondary text-medium underline'>{username} .</span> */}
            {
              visitorCount > 10 ?
                <p className=' p-1 my-1 px-2 mx-2 text-md  rounded-[8px]
              text-accent text-center
              cursor-pointer tracking-wide'>
                  <span className='inline-flex mx-1 text-md'>
                    <HiUserGroup />
                  </span>
                  {visitorCount}
                  {/* joined from {getMyDate(createdAt)} */}
                </p> : null
            }
            <Link href="/">
              <p className='border-primary border text-primary p-1 my-1 px-2 mx-2 text-xs rounded-[8px] 
              hover:bg-primary
              text-center
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