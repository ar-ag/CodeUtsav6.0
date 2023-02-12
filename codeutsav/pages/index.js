import Footer from '@/components/footer/Footer'
import NavBar from '@/components/navBar/Navbar'
import React from 'react'
import doc from '../assets/doc.svg'
import Image from 'next/image'

function home() {
  return (
    <div>
          <NavBar/>
      <div className='main' style={{width:'80%', margin:'auto',height:'auto',position: 'relative',display:'flex',flexDirection:'row',gap:'10px',justifyContent:'center',alignItems:'center' }}>
            <div className='left' style={{display:'flex',flex:'0.5',flexDirection:'column'}}>
          <span>Meet Mr EHR
            The EHR of today, equipped with the latest technology and modern functioning. Connect your wallet and get the data in an efficient manner.
</span>
            </div >
        <div className='right' style={{ display: 'flex', flex: '0.5', justifyContent: 'center', alignItems: 'center', padding:'20px' }}>
           <Image src={doc} style={{objectFit:'contain',height:'400px',width:'400px'}}/>
            </div>
          </div>
          <Footer/>
    </div>
  )
}

export default home
