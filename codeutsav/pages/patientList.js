import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from 'assets/logo.svg'
import add from 'assets/add.svg'
import Card from '@/components/card/Card'
import { useRouter } from 'next/router'
import { useAccount, useDisconnect } from 'wagmi'
import Link from 'next/link'
import basicCard from './basicCard'
import axios from 'axios'


// export const getStaticProps=async(context)=>{
//   console.log(context.params);
//   const res = await fetch(`http://localhost:5000/api/doctor/7934857389080`);

//   const dat = await res.json();
//   console.log(dat)
//   return {
//     props:{
//       dat,
//     },
//   };
// };
function patientList() {
  const router = useRouter()
  const DocData = router.query
  const { address } = DocData

  const [dat, setDat] = useState(null);
  const [isLoading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/doctor/${address}`)
      .then((res) => res.json())
      .then((data) => {
        setDat(data);
        setLoading(false);
      });
  }, []);
  // console.log(patient)

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
            query: DocData,
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
        
        {dat &&
          dat.map((p) => {
            console.log(p); 
            return (
              <div className="card">
                <Card props={{name:p.name,email:p.email,phone:p.phone}} />
          {/* <Card props={{ name: "Amayiya", email: "amayiya@gmail.com", phone: "7007986911" }} />
          <Card props={{ name: "Surjeet", email: "surjeet@gmail.com", phone: "7007986921" }} />
          <Card props={{ name: "Dhruvey", email: "dhruvey@gmail.com", phone: "7007996900" }} />
          <Card props={{ name: "Aryania", email: "aryania@gmail.com", phone: "9117986900" }} />
          <Card props={{ name: "Himansh", email: "himansh@gmail.com", phone: "8007986900" }} />
          <Card props={{ name: "Pranjali", email:"pranjali@gmail.com", phone: "97807986900" }} />
          <Card props={{ name: "Vinayli", email: "Vinayli@gmail.com", phone: "9117986900" }} />
          <Card props={{ name: "Jiyaman", email: "jiyaman@gmail.com", phone: "8607986900" }} /> */}
              </div>
            )
          })} 
      </div>
    </div>
  )
}

export default patientList
