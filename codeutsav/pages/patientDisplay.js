import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import logo from "assets/logo.svg";
import CheckoutWizard from "@/components/checkoutWizard/CheckoutWizard";
import Link from "next/link";
import { all } from "axios";
import { useRouter } from "next/router";
import { Loader } from "../components/Loader";
const PatientDisplay = () => {
  const router = useRouter();
  const data = router.query;
  console.log(`data of request in patientDisplay: ${data.address}`);

  const [walletAddress, setWalletAddress] = useState(data.address);
  const [patientId, setPatientId] = useState(data.id);
  //  const walletAddress = data.address;
  //  const patientId = data.id;

  const [dat, setDat] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const [name, setName] = useState();

  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [dob, setDob] = useState();
  const [allergies, setAllergies] = useState();
  const [hospitalization, setHospitalization] = useState();
  const [visits, setVisits] = useState();
  const [history, setHistory] = useState();
  const [diseases, setDiseases] = useState();
  const [insurance, setInsurances] = useState();
  const [surgeries, setSurgeries] = useState();
  const [medication, setMedication] = useState();
  const [immune, setImmune] = useState();
  const handleClick = () => {
    const Object = [
      { walletAddress: data },
      {
        ehr: JSON.stringify([
          {
            name: `${fName + " " + lName}`,
            gender: `${gender}`,
            email: `${email}`,
            phone: `${phone}`,
            dob: `${dob}`,
            allergies: `${allergies}`,
            hospitalization: `${hospitalization}`,
            visits: `${visits}`,
            history: `${history}`,
            diseases: `${diseases}`,
            insurance: `${insurance}`,
            surgeries: `${surgeries}`,
            medication: `${medication}`,
            immune: `${immune}`,
          },
        ]),
      },
    ];
  };
  useEffect(() => {
    setLoading(true);
    setWalletAddress(data.address);
    setPatientId(data.id);
    fetch(
      `https://ehr-0f78.onrender.com/api/doctor/${walletAddress}/${patientId}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(`inside useEffect data: ${data}`);
        setDat(data);
        setLoading(false);
      });
  }, []);

  console.log(dat);

  let m;
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleClicke = () => {
    setIsActive((current) => !current);
  };
  const handlesubmit = () => {
    setOpen((current) => !current);
  };
  if (isActive === true) m = 1;
  else m = 0;

  if (isOpen === true) m = 2;
  else m = 1;

  if (dat != null) {
    //  {dat && dat.map((p) => {

    return (
      <>
        {isLoading === true ? (
          <div>Loading....</div>
        ) : (
          <div className="maines">
            <div className="navBar">
              <div className="leftnav">
                <div className="pnav">
                  <Image src={logo} />
                  <div className="name">EHR</div>
                </div>
              </div>
            </div>
            <div className="containers">
              <div className="hedi">Patient Display</div>
              <br></br>
              <div className="tab"></div>

              <div className="hed">Basic Information</div>
              <div className="form">
                <div className="ls">
                  <div className="fn">
                    First Name
                    <div
                      className="box"
                      onChange={(event) => setName(event.target.value)}
                    >
                      {dat.name}
                    </div>
                  </div>

                  {/* <div className='ln'>Last Name
       <input placeholder='Pathak' name="lName"
        autoComplete="off"  id='op'
        onChange={(event) => setlName(event.target.value)}
        value={lName} className='box'></input></div> */}
                  <div className="ed">
                    Email-id
                    <div
                      className="box"
                      onChange={(event) => setEmail(event.target.value)}
                    >
                      {dat.email}
                    </div>
                  </div>

                  <div className="ed">
                    Date-of-Birth &nbsp;
                    <div
                      onChange={(event) => setDob(event.target.value)}
                      className="box"
                      id="op"
                    >
                      {dat.dob}
                    </div>
                  </div>

                  <div className="headin">Past Records</div>
                  <div className="an">
                    Allergies
                    <div
                      onChange={(event) => {
                        setAllergies(event.target.value), { activeStep: 1 };
                      }}
                      className="box"
                      onClick={handleClicke}
                      id="op"
                    >
                      {dat.allergies}
                    </div>
                  </div>
                  <div className="ln">
                    Records of hospitalization
                    <div
                      onChange={(event) =>
                        setHospitalization(event.target.value)
                      }
                      className="box"
                      id="op"
                    >
                      {dat.hospitalization}
                    </div>
                  </div>
                  <div className="headin">Problem & Diagnose</div>
                  <div className="an">
                    Conditions or Diseases
                    <div
                      onChange={(event) => {
                        setDiseases(event.target.value), { activeStep: 2 };
                      }}
                      className="box"
                      onClick={handlesubmit}
                      id="op"
                    >
                      {dat.diseases}
                    </div>
                  </div>
                  <div className="ln">
                    Surgeries Performed
                    <div
                      onChange={(event) => setSurgeries(event.target.value)}
                      className="box"
                      id="op"
                    >
                      {dat.surgeries}
                    </div>
                  </div>
                  <div className="ed">
                    List of medication
                    <div
                      onChange={(event) => setMedication(event.target.value)}
                      className="box"
                      id="op"
                    >
                      {dat.medication}
                    </div>
                  </div>
                </div>
                <div className="rs">
                  <div className="fn">
                    Gender
                    <div
                      onChange={(event) => setGender(event.target.value)}
                      className="boxim"
                      id="op"
                    >
                      {dat.gender}
                    </div>
                  </div>
                  <div className="ln">
                    Phone Number
                    <div
                      onChange={(event) => setPhone(event.target.value)}
                      className="boxim"
                      id="op"
                    >
                      {dat.phone}
                    </div>
                  </div>

                  <div className="ed h-[32px]">
                    <div></div>
                  </div>

                  <div className="headin"></div>
                  <div className="an">
                    Previous Visits to healthcare professionals
                    <div
                      onChange={(event) => setVisits(event.target.value)}
                      className="boxim"
                      id="op"
                    >
                      {dat.visits}
                    </div>
                  </div>
                  <div className="ln">
                    Family History
                    <div
                      onChange={(event) => setHistory(event.target.value)}
                      className="boxi left-[752px]"
                      id="op"
                    >
                      {dat.history}
                    </div>
                  </div>
                  <div className="headin"></div>
                  <div className="an">
                    Insurance
                    <div
                      onChange={(event) => setInsurances(event.target.value)}
                      className="boxime left-[732px]"
                      id="op"
                    >
                      {dat.insurance}
                    </div>
                  </div>
                  <div className="ln">
                    Immune status
                    <div
                      onChange={(event) => setImmune(event.target.value)}
                      className="boxi left-[756px]"
                      id="op"
                    >
                      {dat.immune}
                    </div>
                  </div>
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
        )}
      </>
    );
    // })}
  } else {
    return (
      // <><Loader/></>
      <span>
        <Loader />
      </span>
    );
  }
};

export default PatientDisplay;
