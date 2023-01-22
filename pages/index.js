import Head from 'next/head'
//import Image from 'next/image'
//import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar/NavBar'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcin Bartmiński</title>
        <meta name="description" content="My personal portfolio website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
    </>
  )
}
