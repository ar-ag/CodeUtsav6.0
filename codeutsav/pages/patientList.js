import React from 'react'
import Image from 'next/image'
import logo from 'assets/logo.svg'

function patientList() {
  return (
    <div className='maine'>
       <div className='navBar'>
       <div className='leftnav' >
       <div className='pnav'>
       <Image src={logo} />
         <div className='name'>EHR</div>
       </div>
        
       </div>
       </div>
       <div className='container'>

       </div>
    </div>
  )
}

export default patientList