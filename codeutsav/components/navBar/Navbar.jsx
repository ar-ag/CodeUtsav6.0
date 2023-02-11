import logo from '../../assets/logo.svg'
import Image from 'next/image'
import setting from '../../assets/setting.svg'
import landing from '../../assets/landing.png'

const NavBar = () => {

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
         <div className='user'>
           Connect Wallet
         </div>
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