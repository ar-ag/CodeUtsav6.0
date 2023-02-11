
import React from 'react'
import Image from 'next/image'
import logo from 'assets/logo.svg'
import CheckoutWizard from '@/components/checkoutWizard/CheckoutWizard'
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
 <CheckoutWizard /></div>

 <div className="hed">Basic Information</div>
 <div className='form'>
<div className='ls'>
 <div className='fn'>First Name
 <input placeholder='First Name' className='box'></input></div>
 <div className='ln'>Last Name
 <input placeholder='Last Name' className='box'></input></div>
 <div className='ed'>Email-id
 <input placeholder='Email=id' className='box'></input></div>
 </div>
 <div className='rs'>
 <div className='fn'>Gender
 <input placeholder=' M for male and F for female' className='boxim'></input></div>
 <div className='ln'>Phone Number
 <input placeholder='Contact Number' className='boxi'></input></div>
 <div className='ed'>Date-of-Birth
 &nbsp;<input placeholder='DD-MM-YYYY' className='boxi'></input></div>
 </div>
 </div>
 <button className='ns'>
    Next step
 </button>
    </div>
    </div>   
   
  )
}

export default basicCard