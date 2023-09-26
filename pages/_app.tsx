import Navbar from '@/components/Navbar'
import NavbarMobile from '@/components/NavbarMobile'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import HeaderMobile from '../components/HeaderMobile'
import Footer from '../components/Footer'
import FooterMobile from '../components/FooterMobile'
import { SessionProvider } from 'next-auth/react'
import { useMediaQuery } from '@mui/material'

export default function App({ Component, pageProps, session }: any) {
  // Use the useMediaQuery hook to determine if it's a mobile screen
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <SessionProvider session={session}>
      <>
        {isMobile ? (
          <div>
            <NavbarMobile />
            <HeaderMobile />
            <Component {...pageProps} />
            <FooterMobile />
          </div>
        ) : (
          <div>
            <Navbar />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        )}
      </>
    </SessionProvider>
  );
}

