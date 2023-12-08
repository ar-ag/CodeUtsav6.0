import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "assets/logo.svg";
import add from "assets/add.svg";
import Card from "@/components/card/Card";
import { useRouter } from "next/router";
import { useAccount, useDisconnect } from "wagmi";
import Link from "next/link";
import basicCard from "./basicCard";
import axios from "axios";
import { Loader } from "@/components/Loader";

let noOfPatients = 0;
const PatientList = () => {
  const router = useRouter();
  const DocData = router.query;
  const { address } = DocData;

  const [dat, setDat] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://ehr-0f78.onrender.com/api/doctor/${address}`)
      .then((res) => res.json())
      .then((data) => {
        setDat(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
            <div className="subhead">{noOfPatients}</div>

            <Link
              href={{
                pathname: "/basicCard",
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
              <div className="dob">DOB</div>
            </div>

            {dat &&
              dat.map((p) => {
                console.log(p);
                noOfPatients = dat.length;
                return (
                  <div className="card" key={p.id}>
                    <Card
                      props={{
                        name: p.name,
                        email: p.email,
                        phone: p.phone,
                        dob: p.dob,
                        address: address,
                        id: dat.indexOf(p),
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default PatientList;
