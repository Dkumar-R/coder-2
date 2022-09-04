import '../styles/globals.css'
import Wavbar from '../componets/navbar'
import Footer from '../componets/footer'
import Link from 'next/link'
function MyApp({ Component, pageProps }) {
  return <>
  <Wavbar></Wavbar>
  <Component {...pageProps} />
  <Footer></Footer>
  </> 
}

export default MyApp
