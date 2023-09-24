import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { SessionProvider } from 'next-auth/react'






// export default function App({ Component, pageProps, session }: AppProps) {
export default function App({ Component, pageProps, session }: any) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <>
          <Navbar />
          <Header/>
      
          <Component {...pageProps} />
  
          <Footer/>
          
        </>
      </UserProvider>
    </SessionProvider>
    
    )
}
