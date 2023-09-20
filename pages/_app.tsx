import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import Footer from '../components/Footer'
import Article from '../components/Article'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <>
        <Navbar />
    
        <Component {...pageProps} />
        
      </>
    </SessionProvider>
    
    )
}
