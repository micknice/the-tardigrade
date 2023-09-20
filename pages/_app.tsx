import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'

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
