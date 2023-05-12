import React from 'react'
import Image from 'next/image'
import male from 'assets/male.svg'
import Link from 'next/link'

function Card({props}) {
  let dob = `${(props.dob).substring(0,2)}/${(props.dob).substring(2,4)}/${(props.dob).substring(4)}`
  // const patientId = props.id;
  console.log(props.id);
  return (
    <Link href={{pathname: "/patientDisplay", query: {address : props.address, id:props.id}}}>
    <div className='carde'>
      
      <div className='n'>
        <div className='male'><Image src={male} /></div>
        {props.name}</div>
      <div className='e'>{props.email}</div>
      <div className='p'>{props.phone}</div>
      <div className='d'>{dob}</div>
      
    </div>
    </Link>
  )
}

export default Card