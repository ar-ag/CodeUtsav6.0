import '@/styles/globals.css'
import Navbar from '../components/navBar/Navbar'
import Footer from '../components/footer/Footer'
import '@/components/navBar/Navbar.css'
import doc from '../assets/doc.svg'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbar/>
      <div className='content'>
        <div>

        </div>
        <doc/>
      </div>
      <Footer />
    </>
  )
}
