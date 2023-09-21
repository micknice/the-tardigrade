import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { UserProvider } from '@auth0/nextjs-auth0/client';






export default function App({ Component, pageProps }: AppProps) {
  return (
      <UserProvider>
        <>
          <Navbar />
          <Header/>
      
          <Component {...pageProps} />
  
          <Footer/>
          
        </>
      </UserProvider>
    
    )
}
