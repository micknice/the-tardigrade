import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import MainMobile from '../components/MainMobile'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from '../components/Article'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <div >
      <Head>
        <title>The Tardigrade</title>
        <meta name="description" content="Its a marathon not a sprint"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isMobile &&
      <MainMobile/>
      }
      {!isMobile &&
      <Main/>
      }
      

    </div>
  )
}


