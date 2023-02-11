import React from 'react'
import Image from 'next/image'
import logo from 'assets/logo.svg'
import add from 'assets/add.svg'
import Card from '@/components/card/Card'
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
          <div className='head'>
            List of Patients
          </div>
          <div className='subhead'>
            Total No. : 123
          </div>
          <button className='add'>
             
              <Image src={add}/> <span> Add Patient</span> 
          </button>
      <div className='table'>
        <div className='nam'>Name</div>
        <div className='emailid'>Email-Id</div>
        <div className='phone'>Phone Number</div>
        <div className='date'>Date added</div>
      </div>
      <div className='card'><Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      
       </div>
       
    </div>
  )
}

export default patientList