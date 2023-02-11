import React from 'react'
import Image from 'next/image'
import logo from 'assets/logo.svg'
import add from 'assets/add.svg'
import Card from '@/components/card/Card'
import { useRouter } from 'next/router'
import Link from 'next/link'
import basicCard from './basicCard'
function patientList() {
  const router = useRouter();
  const data = router.query;
  console.log(data);
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
          
        <Link href={{
          pathname: '/basicCard',
          query: data
        }} className='add' >
             
              <Image src={add}/> <span> Add Patient</span> 
          </Link>
          
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