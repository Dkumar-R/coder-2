import '../styles/globals.css'
import Wavbar from '../componets/navbar'
import Link from 'next/link'
function MyApp({ Component, pageProps }) {
  return <>
  <Wavbar></Wavbar>
  <Component {...pageProps} />
  </> 
}

export default MyApp
