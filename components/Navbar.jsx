import React, {useState, useEffect}from 'react'
import Link from 'next/link'
import { GoSearch } from 'react-icons/go'
import {FaCircleUser} from 'react-icons/fa6'
import { RiMoneyPoundCircleFill} from 'react-icons/ri'
import { useSession, signIn, signOut } from 'next-auth/react'
import ReactLoading from 'react-loading';
import {getUserByUsername, postNewUser} from '../pages/api/news/newsApi'

const Navbar = () => {
  const { data: session, status } = useSession()
  console.log(session, 'session')
  const [nav, setNav] = useState(false)

  

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    if(status === 'authenticated'){
      const getUser = async () => { 
        console.log(session.user.name, 'session.user.name')
        const response = await getUserByUsername(session.user.name)
        if(!response){
          const postResponse = await postNewUser(session.user.name, session.user.email, session.user.image)
          console.log(postResponse, 'postResponse')
        }
      }
      getUser()
    }
  },[session])

  return (
    <div className={'flex justify-center items-center fixed w-full h-10    bg-[#041f4a]'}>
      
      <div className ='flex   justify-end   w-2/3 h-full px-2 xl:px-16 sm:ml-3 '>
        
        <div className='hidden md:flex  justify-end  items-center'>

            {/* <div className='flex items-center'>
              <Link className='flex px-3 items-center' href='/' >
                <RiMoneyPoundCircleFill color='#ffe500' size={25}/>
                <p className=' pl-2 font-bold text-guard-yellow hover:border-b'>Print subscriptions</p>
              </Link>
            </div> */}
            <div className='  w-px bg-guard-div-blue h-3/4'/>
            <div className='flex items-center'>
              
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
              // </Link>
              }
            </div>
            <div className='  w-px bg-guard-div-blue h-3/4'/>
            <Link className='flex px-3 items-center' href='/#search' >
              <GoSearch color={'#fff'}size={25}/>
              <p className=' pl-2 font-bold hover:border-b text-white'>Search</p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar