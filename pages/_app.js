import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={500} height={1} 
    options={{ easing: 'ease', speed: 500 }}
    />
    <Component {...pageProps} />
  </>
    )
}

export default MyApp
