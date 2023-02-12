
import React, { use, useEffect, useState } from 'react'
import Image from 'next/image'
import logo from 'assets/logo.svg'
import CheckoutWizard from '@/components/checkoutWizard/CheckoutWizard'
import Link from 'next/link'
import { all } from 'axios'
import { useRouter } from 'next/router'
// import CheckoutWizard from '@/components/checkoutWizard/CheckoutWizard'

function basicCard() {
 const router = useRouter();
 const data = router.query;
 console.log(data);
 const [fName, setfName] = useState();
 const [lName, setlName] = useState();
 const [gender, setGender] = useState()
 const [email, setEmail] = useState()
 const [phone, setPhone] = useState()
 const [dob, setDob] = useState()
 const [allergies, setAllergies] = useState();
 const [hospitalization, setHospitalization] = useState();
 const [visits, setVisits] = useState()
 const [history, setHistory] = useState()
 const [diseases, setDiseases] = useState()
 const [insurance, setInsurances] = useState()
 const [surgeries, setSurgeries] = useState()
 const [medication, setMedication] = useState()
 const [immune, setImmune] = useState()
 const handleClick = () => {
  const Object = [{ "walletAddress": data }, {
   "ehr": JSON.stringify([{
    "name": `${fName + ' ' + lName}`, "gender": `${gender}`, "email": `${email}`, "phone": `${phone}`, "dob": `${dob}`, "allergies": `${allergies}`, "hospitalization": `${hospitalization}`, "visits": `${visits}`, "history": `${history}`, "diseases": `${diseases}`, "insurance": `${insurance}`, "surgeries": `${surgeries}`, "medication": `${medication}`, "immune": `${immune}`
   }])
  }]
  axios({
   method: 'post',
   url: 'http:localhost:5000/api/doctor',
   data: {
    Object
   }
  }).then((res) => {
   console.log(res);
  }).catch((e) => {
   console.log(e)
  });
 }
 let m;
 const [isActive, setIsActive] = useState(false);
 const [isOpen, setOpen] = useState(false);
 const handleClicke = () => {
  setIsActive(current => !current);
 };
 const handlesubmit = () => {
  setOpen(current => !current);
 }
 if (isActive === true)
  m = 1;
 else
  m = 0;

 if (isOpen === true)
  m = 2;
 else
  m = 1;
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
    <div className='hedi'>
     Patient Display
    </div><br></br>
    <div className='tab'>
    </div>

    <div className="hed">Basic Information</div>
    <div className='form'>
     <div className='ls'>
      <div className='fn'>First Name
       <input placeholder='Manjeet' name="fName" id='op'
        autoComplete="off"
        onChange={(event) => setfName(event.target.value)}
        value={fName} className='box'></input></div>
      <div className='ln'>Last Name
       <input placeholder='Pathak' name="lName"
        autoComplete="off"  id='op'
        onChange={(event) => setlName(event.target.value)}
        value={lName} className='box'></input></div>
      <div className='ed'>Email-id
       <input placeholder='manjeet@gmail.com' name="email"
        autoComplete="off"  id='op'
        onChange={(event) => setEmail(event.target.value)}
        value={email} className='box'></input></div>
      <div className='headin'>
       Past Records
      </div>
      <div className='an'>Allergies
       <input placeholder='NA' name="allergies"
        autoComplete="off"
        onChange={(event) => { setAllergies(event.target.value), { activeStep: 1 } }}
        value={allergies} className='box' onClick={handleClicke}  id='op' ></input></div>
      <div className='ln'>Records of hospitalization
       <input placeholder='NA' name="hospitalization"
        autoComplete="off"
        onChange={(event) => setHospitalization(event.target.value)}
        value={hospitalization} className='box'  id='op'></input></div>
      <div className='headin'>
       Problem & Diagnose
      </div>
      <div className='an'>Conditions or Diseases
       <input placeholder='Malaria' name="diseases"
        autoComplete="off"
        onChange={(event) => { setDiseases(event.target.value), { activeStep: 2 } }}
        value={diseases} className='box' onClick={handlesubmit}  id='op'></input></div>
      <div className='ln'>Surgeries Performed
       <input placeholder='0' name="surgeries"
        autoComplete="off"
        onChange={(event) => setSurgeries(event.target.value)}
        value={surgeries} className='box'  id='op'></input></div>
      <div className='ed'>List of medication
       <input placeholder='NA' name="medicines"
        autoComplete="off"
        onChange={(event) => setMedication(event.target.value)}
        value={medication} className='box'  id='op'></input></div>
     </div>
     <div className='rs'>
      <div className='fn'>Gender
       <input placeholder=' M' className='boxim' type="text"
        name="gender"
        autoComplete="off"
        onChange={(event) => setGender(event.target.value)}
        value={gender}  id='op'></input></div>
      <div className='ln'>Phone Number
       <input placeholder='7007986900' name="phone"
        autoComplete="off"
        onChange={(event) => setPhone(event.target.value)}
        value={phone} className='boxi' id='op'></input></div>
      <div className='ed'>Date-of-Birth
       &nbsp;<input placeholder='06012003' name="dob"
        autoComplete="off"
        onChange={(event) => setDob(event.target.value)}
        value={dob} className='boxi' id='op'></input></div>
      <div className='headin'></div>
      <div className='an'>Previous Visits to healthcare professionals
       <input placeholder='5' name="visits"
        autoComplete="off"
        onChange={(event) => setVisits(event.target.value)}
        value={visits} className='boximm'  id='op'></input></div>
      <div className='ln'>Family History
       <input placeholder='NA' name="hospitalization"
        autoComplete="off"
        onChange={(event) => setHistory(event.target.value)}
        value={history} className='boxi'  id='op'></input></div>
      <div className='headin'>

      </div>
      <div className='an'>Insurance
       <input placeholder='NA' name="insurance"
        autoComplete="off"
        onChange={(event) => setInsurances(event.target.value)}
        value={insurance} className='boxime'  id='op'></input></div>
      <div className='ln'>Immune status
       <input placeholder='8' name="visits"
        autoComplete="off"
        onChange={(event) => setImmune(event.target.value)}
        value={immune} className='boxi'  id='op'></input></div>
     </div>
    </div>
    {/* <Link href={{
     pathname: '/patientList',
     query: [`${data}`, JSON.stringify([{
      "name": `${fName + ' ' + lName}`, "gender": `${gender}`, "email": `${email}`, "phone": `${phone}`, "dob": `${dob}`, "allergies": `${allergies}`, "hospitalization": `${hospitalization}`, "visits": `${visits}`, "history": `${history}`, "diseases": `${diseases}`, "insurance": `${insurance}`, "surgeries": `${surgeries}`, "medication": `${medication}`, "immune": `${immune}`
     }])]
    }} className='ns' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90px', textAlign: 'center' }} onClick={handleClick}>
     Submit

    </Link> */}
   </div>
  </div>

 )
}

export default basicCard