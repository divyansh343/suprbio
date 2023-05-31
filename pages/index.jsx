import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Features from '../components/Landing/Features'
import Footer from '../components/Landing/Footer'
import Hero from '../components/Landing/Hero'
import Pricing from '../components/Landing/Pricing'
import Testimonials from '../components/Landing/Testimonials'
import Themes from '../components/Landing/Themes'
import Navbar from '../components/Layout/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [themeState, setThemeState] = useState("light")
  return (
    <>
      <div data-theme={themeState}>
        <Navbar themeState={themeState} setThemeState={setThemeState} />
        <Hero themeState={themeState} />
        <Features />
        <Themes />
        <Pricing />
        <Footer />
      </div>
    </>
  )
}
