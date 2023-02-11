import Checkout from '@/components/Checkout'
import React from 'react'
import Image from 'next/image'
import logo from 'assets/logo.svg'
import Check from '@/components/check'
import Link from 'next/link'
// import CheckoutWizard from '@/components/checkoutWizard/CheckoutWizard'

function basicCard() {
  return (
    <div className='maines'>
    <div className='navBar'>
    <div className='leftnav'>
    <div className='pnav'>
    <Image src={logo} />
         <div className='name'>EHR</div>
       </div>
    </div>
    </div>
    <div className='containers'>
    <div className='headi'>
        Add a new Patient
    </div><br></br>
    <div className='tab'> 
 <Check/></div>

 <div className="hedi">Problem & Diagnose</div>
 <div className='form'>
<div className='ls'>
 <div className='fn'>Conditions or Diseases
 <input placeholder='Conditions or Diseases' className='box'></input></div>
 <div className='ln'>Surgeries Performed
 <input placeholder='Surgeries Performed' className='box'></input></div>
 <div className='ed'>List of medication
 <input placeholder='List of medicines' className='box'></input></div>
 </div>
 <div className='rs'>
 <div className='fn'>Insurance
 <input placeholder=' Insurance Information' className='boxime'></input></div>
 <div className='ln'>Immune status
 <input placeholder='Immunisation status (out of 10)' className='boxi'></input></div>

 </div>
 </div>
 <Link href="/patientList" className='ns' id='ss'>
    Submit
 </Link>
    </div>
    </div>   
   
  )
}

export default basicCard