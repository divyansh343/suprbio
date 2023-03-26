import Head from 'next/head'
import Image from 'next/image'
import Features from '../components/Landing/Features'
import Footer from '../components/Landing/Footer'
import Hero from '../components/Landing/Hero'
import Pricing from '../components/Landing/Pricing'
import Testimonials from '../components/Landing/Testimonials'
import Themes from '../components/Landing/Themes'
import Navbar from '../components/Layout/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div data-theme="light">
        <Navbar />
        <Hero />
        {/* <Features /> */}
        <Themes />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}
