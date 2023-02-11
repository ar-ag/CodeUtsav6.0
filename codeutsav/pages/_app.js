import '@/styles/globals.css'
import Navbar from '../components/navBar/Navbar'
import Footer from '../components/footer/Footer'
import '@/components/navBar/Navbar.css'
import doc from '../assets/doc.svg'
import '@/pages/patientList.css'
// import { createClient,configureChains,defaultChains, WagmiConfig} from 'wagmi'
// import {publicProvider} from 'wagmi/providers/public'
import {SessionProvider} from 'next-auth/react'
// const {provider,webSocketProvider}=configureChains(defaultChains,[publicProvider()]);
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, avalanche, mainnet, polygon } from 'wagmi/chains'

// const client=createClient({
//   provider,webSocketProvider,autoConnect:true,
// });

const projectId = 'df619298707a1ea61cc340e98d0e34dd';

const chains = [mainnet, polygon, avalanche, arbitrum]

const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ version: '1', appName: 'web3Modal', chains, projectId }),
  provider
})

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains)


export default function App({ Component, pageProps }) {

  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  
  return(
    <>
      {ready ? (
        <WagmiConfig client={wagmiClient}>
          <Component {...pageProps} />
        </WagmiConfig>
      ) : null}

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
