import Checkout from '@/components/Checkout'
import React from 'react'
import Image from 'next/image'
import logo from 'assets/logo.svg'
import Link from 'next/link'

// import CheckoutWizard from '@/components/checkoutWizard/CheckoutWizard'

function basicCard() {
  return (
    <div className='mainese'>
    <div className='navBar'>
    <div className='leftnav'>
    <div className='pnav'>
    <Image src={logo} />
         <div className='name'>EHR</div>
       </div>
    </div>
    </div>
    <div className='containerss'>
    <div className='headi'>
        Add a new Patient
    </div><br></br>
    <div className='tab'> 
 <Checkout /></div>

 <div className="hed">Past Records</div>
 <div className='form'>
<div className='ls'>
 <div className='fn'>Allergies
 <input placeholder='Allergies' className='box'></input></div>
 <div className='ln'>Records of hospitalization
 <input placeholder='Records of hospitalization' className='box'></input></div>
 {/* <div className='ed'>Email-id
 <input placeholder='Email=id' className='box'></input></div> */}
 </div>
 <div className='rs'>
 <div className='fn'>Previous Visits to healthcare professionals
 <input placeholder=' Previous Visits' className='boximm'></input></div>
 <div className='ln'>Family History
 <input placeholder='Family history' className='boxi'></input></div>
 {/* <div className='ed'>Date-of-Birth
 &nbsp;<input placeholder='DD-MM-YYYY' className='boxi'></input></div> */}
 </div>
 </div>
 <Link href="/medication" className='ns'>
    Next Step
 </Link>
    </div>
    </div>   
   
  )
}

export default basicCard