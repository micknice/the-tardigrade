import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import Image from 'next/image'
import Main from '../components/Main'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from '../components/Article'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <SessionProvider>
      <>
        <Navbar />
        <Header/>
    
        <Component {...pageProps} />

        <Footer/>
        
      </>
    // </SessionProvider>
    
    )
}
