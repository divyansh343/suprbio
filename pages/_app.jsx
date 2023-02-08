import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#0061ff" startPosition={0.3} stopDelayMs={500} height={3}
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