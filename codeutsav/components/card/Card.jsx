import React from 'react'
import Image from 'next/image'
import male from 'assets/male.svg'

function Card() {
  return (
    <div className='carde'>
        <div className='n'>
        <div className='male'><Image src={male} /></div>
        
        name</div>
        <div className='e'>email</div>
        <div className='p'>phone</div>
        <div className='d'>date</div>
    </div>
  )
}

export default Card