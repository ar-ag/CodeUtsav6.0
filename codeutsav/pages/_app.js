import '@/styles/globals.css'
import Navbar from '../components/navBar/Navbar'
import Footer from '../components/footer/Footer'
import '@/components/navBar/Navbar.css'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbar/>
      
      <Footer />
    </>
  )
}
