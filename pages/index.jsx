import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Landing/Hero'
import Navbar from '../components/Layout/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div data-theme="light">
    <Navbar />
    <Hero/>
    </div>


    </>
  )
}