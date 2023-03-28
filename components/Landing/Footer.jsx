import Image from 'next/image'
import React from 'react'
import { HiTrendingUp } from 'react-icons/hi'
import logoImg from '../../assets/images/power.png'
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-100 border-t-2 text-base-content">
       
        <div>
          <Image src={logoImg} height={50} width={50} alt="" />
          <p className='text-lg'>Suprr.Link</p>
          <p className='text-md'>Shareable profile link for social media users.</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <div className='grid place-items-center  '>
            <div className="stats shadow text-primary drop-shadow-lg">
              <div className="stat">
                <div className="stat-title">Worldwide</div>
                <div className="stat-value">19,000<span className='inline-block text-md   mr-1'><HiTrendingUp /></span></div>
                <div className="stat-desc">Users Joined So Far</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer