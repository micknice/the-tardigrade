import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from '../components/Article'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mike McCullagh - Portfolio</title>
        <meta name="description" content="etc. etc."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Header/>
      {/* <Main/> */}
      <Article/>
      <Footer/>
      

    </div>
  )
}
