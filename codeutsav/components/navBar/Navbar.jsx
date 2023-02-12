import logo from '../../assets/logo.svg'
import Image from 'next/image'
import setting from '../../assets/setting.svg'
import landing from '../../assets/landing.png'
import axios from 'axios'
import { useWeb3Modal, Web3Button } from '@web3modal/react'
import { useState, useEffect } from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import { useRouter } from 'next/router'
import Link from 'next/link'
const NavBar = () => {
  const [logged, setLogged] = useState(false)
  const { isConnected, address } = useAccount()
  const [patients, setPatients] = useState('')
  const [bla, setBla] = useState(false)
  useEffect(() =>{
    const getData = async () => {
      const result = await axios.get(
        `http://localhost:5000/api/doctor/${address}`,
      )
      let res = JSON.parse(JSON.stringify(result))
      const response = res.data
      console.log(response)
      setPatients(response[0])
      console.log(patients, 'from Get')
    }
    getData()
  }, [bla])
  const handleClick =() => {
    setBla(!bla)
    // console.log(`${address}`)
    // let result =await axios.get(`http://localhost:5000/api/doctor/${address}`).then((result)=>{
    // }).catch((e)=>{
    //   console.log(e)
    // })
  }
  return (
    <>
      <div className="curved-gradient">
        <Image src={landing} />
      </div>
      <div className="navBar">
        <div className="leftnav">
          <Image src={logo} />
          <div className="name">EHR</div>
        </div>
        <div className="rightnav" style={{ textDecoration: 'none' }}>
          {/* <button onClick={getWallet}>
           Connect Wallet
         </button> */}
          <Web3Button icon="show" label="Connect Wallet" balance="show" />
          <div className="line"></div>
          <div className="settings">
            {address && (
              <Link
                onClick={handleClick}
                href={{
                  pathname: '/patientList',
                  query: {
                    address,
                    patients,
                  },
                }}
                style={{
                  display: 'flex',
                  width: '100px',
                  borderRadius: '10px',
                  color: 'white',
                  background: '#6A1B9A',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '40px',
                }}
              >
                Patients
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
