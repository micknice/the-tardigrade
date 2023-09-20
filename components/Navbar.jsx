import React, {useState, useEffect}from 'react'
import {IconContext} from 'react-icons'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import { GoSearch } from 'react-icons/go'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {FaCircleUser} from 'react-icons/fa6'
import { RiMoneyPoundCircleFill} from 'react-icons/ri'
// import navLogo from '../public/assets/nav/brain.png'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const [shadow, setShadow] = useState(4)

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 0 && window.scrollY <50) {
        setShadow(4)
      } 
      else if (window.scrollY >= 50 && window.scrollY <100) {
        setShadow(0)
      } 
      else if (window.scrollY >= 100 && window.scrollY <150) {
        setShadow(1)
      }  else if (window.scrollY >= 150 && window.scrollY <250) {
        setShadow(2)
      } else if (window.scrollY >= 250) {
        setShadow(3)
      } else {
        setShadow(4)
      }
    }
    console.log('shadow', shadow)
    window.addEventListener('scroll', handleShadow)
  },);

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className={
      'flex justify-center items-center fixed w-full h-10    bg-[#041f4a]'}>
      <div className ='flex   justify-end   w-2/3 h-full px-2 2xl:px-16 sm:ml-3'>
        
        <div className='hidden md:flex  justify-end  items-center'>

            <div className='flex items-center'>
              <Link className='flex px-3 items-center' href='/' >
                <RiMoneyPoundCircleFill color='#ffe500' size={25}/>
                <p className=' pl-2 font-bold text-guard-yellow hover:border-b'>Print subscriptions</p>
              </Link>
            </div>
            <div className='  w-px bg-guard-div-blue h-3/4'/>
            <div className='flex items-center'>
              <Link className='flex px-3 items-center' href='/#signin' >
                <FaCircleUser size={22}/>
                <p className=' pl-2 font-bold hover:border-b'>Sign in</p>
              </Link>
            </div>
            <div className='  w-px bg-guard-div-blue h-3/4'/>
            <Link className='flex px-3 items-center' href='/#search' >
              <GoSearch size={25}/>
              <p className=' pl-2 font-bold hover:border-b '>Search</p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar