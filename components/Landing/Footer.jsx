import Image from 'next/image'
import React from 'react'
import logoImg from '../../assets/images/power.png'
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-100 text-base-content">
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
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </>
  )
}

export default Footer