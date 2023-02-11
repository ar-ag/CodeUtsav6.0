import logo from '../../assets/logo.svg'
import Image from 'next/image'
import setting from '../../assets/setting.svg'
import landing from '../../assets/landing.png'
import axios from 'axios'
import { useWeb3Modal, Web3Button } from '@web3modal/react'
import { useState } from 'react'
import { useAccount, useDisconnect } from 'wagmi'

const NavBar = () => {
  async function getWallet(){
    const response=await axios.get('/api/hello');
  }

 return (
  <>
     <div className='curved-gradient'>
      <Image src={landing} />
      </div>
     <div className='navBar'>
       <div className='leftnav' >
         <Image src={logo} />
         <div className='name'>EHR</div>
       </div>
       <div className='rightnav' style={{ textDecoration: "none" }}>
         {/* <button onClick={getWallet}>
           Connect Wallet
         </button> */}
         <Web3Button icon="show" label="Connect Wallet" balance="show" />
         <div className='line'></div>
         <div className='settings'>
           <Image src={setting} />
         </div>
       </div>
     </div>
  </>
 )
}

export default NavBar