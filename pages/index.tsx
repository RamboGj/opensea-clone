import { useWeb3 } from '@3rdweb/hooks'
import { useAddress, useMetamask } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import { client } from '../lib/sanityClient'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() { 
  const connectWithMetamask = useMetamask()
  const address = useAddress()

  useEffect(() => {
      if (address) {
        (async () => {
          const userDoc = {
            _type: 'users',
            _id: address,
            userName: 'Unnamed',
            walletAddress: address
          }

          const result = await client.createIfNotExists(userDoc) 
          return result
        })()
      } else {
        return
      }
  }, [address])

  return (
    <div className={style.wrapper}>
      {address ? (
        <>
        <NavBar />
        <Hero />
      </>
      ): (
        <button 
          onClick={connectWithMetamask}
          className={style.button}>
          Connect Wallet
        </button>
      )
    }
    </div>
  )
}