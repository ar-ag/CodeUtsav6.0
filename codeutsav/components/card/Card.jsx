import React from 'react'
import Image from 'next/image'
import male from 'assets/male.svg'
import Link from 'next/link'

function Card({props}) {
  return (
    <div className='carde'>
      <div className='n'>
        <div className='male'><Link href="/patientDisplay"><Image src={male} /></Link></div>
        {props.name}</div>
      <div className='e'>{props.email}</div>
      <div className='p'>{props.phone}</div>
      <div className='d'>date</div>
    </div>
  )
}

export default Card