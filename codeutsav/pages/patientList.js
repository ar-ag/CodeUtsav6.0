import React, { useState } from 'react'
import Image from 'next/image'
import logo from 'assets/logo.svg'
import add from 'assets/add.svg'
import Card from '@/components/card/Card'
import { useRouter } from 'next/router'
import Link from 'next/link'
import basicCard from './basicCard'
import axios from 'axios'
// export const getStaticProps=async()=>{
//   const res = await fetch("http://localhost:5000/api/doctor/dhgouaoajo934083798");

//   const dat = await res.json();
//   return {
//     props:{
//       dat,
//     },
//   };
// };
function patientList() {
  const router = useRouter()
  const data = router.query
  const { address, patient } = data
  console.log(patient)

  // const handlerClick = async () => {
  //   let result = await axios.get(`http://localhost:5000/api/doctor/${address}`).then((result) => {
  //     let res = JSON.parse(JSON.stringify(result))
  //     patient=res;
  //     console.log(res);
  //   }).catch((e) => {
  //     console.log(e)
  //   })
  // }

  return (
    <div className="maine">
      <div className="navBar">
        <div className="leftnav">
          <div className="pnav">
            <Image src={logo} />
            <div className="name">EHR</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="head">List of Patients</div>
        <div className="subhead">Total No. : 123</div>

        <Link
          href={{
            pathname: '/basicCard',
            query: data,
          }}
          className="add"
        >
          <Image src={add} /> <span> Add Patient</span>
        </Link>

        <div className="table">
          <div className="nam">Name</div>
          <div className="emailid">Email-Id</div>
          <div className="phone">Phone Number</div>
          <div className="date">Date added</div>
        </div>
        {/* {patient &&
          patient.map((p) => {
            return ( */}
              <div className="card">
                <Card props={{name:"Manjeet",email:"manjeet@gmail.com",phone:"7007986900"}} />
          <Card props={{ name: "Amayiya", email: "amay@gmail.com", phone: "7007986911" }} />
          <Card props={{ name: "Surjeet", email: "surjeet@gmail.com", phone: "7007986921" }} />
          <Card props={{ name: "Dhruvey", email: "dhruv@gmail.com", phone: "7007996900" }} />
          <Card props={{ name: "Aryania", email: "aryan@gmail.com", phone: "9117986900" }} />
          <Card props={{ name: "Himansh", email: "himan@gmail.com", phone: "8007986900" }} />
          <Card props={{ name: "Pranjali", email: "Pranjal@gmail.com", phone: "7807986900" }} />
          <Card props={{ name: "Vinayli", email: "Vinay@gmail.com", phone: "9117986900" }} />
          <Card props={{ name: "Jiyaman", email: "jiyaRatho@gmail.com", phone: "8607986900" }} />
              </div>
            {/* )
          })} */}
      </div>
    </div>
  )
}

export default patientList
