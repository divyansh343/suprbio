import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
        Suprr link - Shareble profile link
        </title>
        <meta
          name="description"
          content="Create a shareable profile on Suprr.link and showcase your projects, links, and social handles to the world. Enhance your online presence and let people know what you've been working on."
          key="desc"
        />
      </Head>
      <NextNProgress color="#377cfb" startPosition={0.3} stopDelayMs={500} height={1}
        options={{ easing: 'ease', speed: 500, showSpinner: false }}
      />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp