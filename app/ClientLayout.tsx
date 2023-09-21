"use client"
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'

export default function App({ children }: {children: React.ReactNode}) {
  return <>{children}</>
}
