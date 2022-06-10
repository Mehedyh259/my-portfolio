import Navbar from '../components/Navbar'
import '../styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])
  return <>

    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
