import React, {useState, useEffect}from 'react'
import Link from 'next/link'
import { GoSearch } from 'react-icons/go'
import {FaCircleUser} from 'react-icons/fa6'
import { RiMoneyPoundCircleFill} from 'react-icons/ri'
import { useSession, signIn, signOut } from 'next-auth/react'
import ReactLoading from 'react-loading';
import {getUserByUsername, postNewUser} from '../pages/api/news/newsApi'

const NavbarMobile = () => {
  const { data: session, status } = useSession()
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    if(status === 'authenticated'){
      const getUser = async () => { 
        console.log(session.user.name, 'session.user.name')
        // const response = await getUserByUsername(session.user.name)
        if(!response){
          const postResponse = await postNewUser(session.user.name, session.user.email, session.user.image)
          // console.log(postResponse, 'postResponse')
        }
      }
      getUser()
    }
  },[session])

  return (
    <div className={'flex justify-start items-center fixed w-full h-7    bg-[#041f4a]  '}>
            <div className='flex items-center justify-start'>
              {!session &&
              // <Link className='flex px-3 items-center' href='/api/auth/login' >
                <div className='flex px-3 items-center' onClick={()=> {signIn()}}>
                  <FaCircleUser size={22} color={'#ffff'}/>
                  <p className=' pl-2 font-bold hover:border-b text-white'>Sign in</p>
                </div>
              // </Link>
              }
              {session &&
              // <Link className='flex px-3 items-center' href='/api/auth/logout' >
                <div className='flex px-3 items-center' onClick={()=> {signOut()}}>
                  {session.user.image &&
                  <img className='h-6 rounded-full' src={session.user.image} alt='/'/>
                  }
                  {!session.user.image &&
                  <FaCircleUser size={22}/>
                  }
                  <p className=' pl-2 font-bold hover:border-b text-white'>{session.user.name}</p>
                </div>
              }
            </div>
            
    </div>
  )
}

export default NavbarMobile