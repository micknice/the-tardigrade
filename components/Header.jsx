import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {HiChevronDown} from 'react-icons/hi2'
import GuardLogo from '../public/assets/tard.png'
import Image from 'next/image'
import SupportButton from './SupportButton'
import { useMediaQuery } from '@mui/material'

const Header = () => {
    const isCondensed = useMediaQuery('(max-width: 1470px)');

    const router = useRouter();
    const { topic } = router.query;

    const [tabTopic, setTabTopic] = useState(null)


    const handleTabClick = (topic) => {
        setTabTopic(topic)
    }

    useEffect(() => {
        if(topic) {
            setTabTopic(topic)
        } else {
            setTabTopic(null)
        }
    },[topic])

    return (
        <div className='w-auto h-auto bg-white pt-10  '>
            <div className='w-full h-48 bg-guard-blue-mid px-40 flex items-center justify-center '>
                <div className=' w-5/6 h-full grid grid-rows-5'>
                    {/* header */}
                    <div className='row-span-4 h-[20rem]  grid grid-cols-3'>
                        {/* left header */}
                        <div className='col-span-2 h-full w-full items-center px-8'>
                            <p className='text-[32px] font-serif font-bold text-guard-yellow'>Support the Tardigrade</p>
                            <p className='text-[16px] font-bold font-sans text-white '>Fund independent journalism with £5 per month</p>
                            <div className='h-3'></div>
                            <SupportButton/>
                        </div>
                        {/* right header */}
                        <div className=' col-span-1 h-2/3 w-full flex items-center justify-center flex-col pr-16 pb-20'>
                            <Image height={120} src={GuardLogo} alt='/'/>
                        </div>

                    </div>
                    {/* topic tabs */}
                    <div className='flex h-full border-l-[1px] border-t-[1px] border-r-[1px] border-guard-div-blue'>
                        

                        {tabTopic && tabTopic === 'news' &&
                            <div className='flex items-center border-t-4 border-guard-topic-orange' onClick={() => handleTabClick('news')}>
                                <Link className='flex pl-2 pr-16 items-center' href='/topic/news' >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white '>News</p>
                                </Link>
                            </div>
                        }
                        {tabTopic !== 'news'  &&
                            <div className='flex items-center hover:border-t-4 border-guard-topic-orange' onClick={() => handleTabClick('news')}>
                                <Link className='flex pl-2 pr-16 items-center' href='/topic/news' >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>News</p>
                                </Link>
                            </div>
                        }

                        <div className='w-px bg-guard-div-blue h-2/3'/>

                        {tabTopic && tabTopic === 'coding' &&
                            <div className='flex items-center border-t-4 border-guard-topic-red' onClick={() => handleTabClick('coding')}>
                                <Link className='flex pl-2 pr-16 items-center ' href={`/topic/coding`} >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Coding</p>
                                </Link>
                            </div>
                        }
                        {tabTopic !== 'coding' &&
                            <div className='flex items-center hover:border-t-4 border-guard-topic-red' onClick={() => handleTabClick('coding')}>
                                <Link className='flex pl-2 pr-16 items-center ' href={`/topic/coding`} >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Coding</p>
                                </Link>
                            </div>
                        }

                        

                        <div className='w-px bg-guard-div-blue h-2/3'/>
                        
                        {tabTopic && tabTopic === 'football' &&
                            <div className='flex items-center border-t-4 border-guard-topic-sky' onClick={() => handleTabClick('football')}>
                                <Link className='flex pl-2 pr-16 items-center' href='/topic/football' >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Football</p>
                                </Link>
                            </div>
                        }
                        {tabTopic !== 'football' &&
                            <div className='flex items-center hover:border-t-4 border-guard-topic-sky' onClick={() => handleTabClick('football')}>
                                <Link className='flex pl-2 pr-16 items-center' href='/topic/football' >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Football</p>
                                </Link>
                            </div>
                        }

                        <div className='w-px bg-guard-div-blue h-2/3'/>

                        {tabTopic && tabTopic === 'science' &&
                            <div className='flex items-center border-t-4 border-guard-topic-pink' onClick={() => handleTabClick('science')}>
                                <Link className='flex pl-2 pr-16 items-center' href='/topic/science' >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Science</p>
                                </Link>
                            </div>
                        }
                        {tabTopic !== 'science' &&
                            <div className='flex items-center hover:border-t-4 border-guard-topic-pink' onClick={() => handleTabClick('science')}>
                                <Link className='flex pl-2 pr-16 items-center' href='/topic/science' >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Science</p>
                                </Link>
                            </div>
                        }

                        <div className='w-px bg-guard-div-blue h-2/3'/>

                        {tabTopic && tabTopic === 'technology' &&
                            <div className='flex items-center border-t-4 border-guard-topic-beige' onClick={() => handleTabClick('technology')}>
                                <Link className='flex pl-2 pr-16 items-center' href='/topic/technology' >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Tech</p>
                                </Link>
                            </div>
                        }
                        {tabTopic !== 'technology' &&
                            <div className='flex items-center hover:border-t-4 border-guard-topic-beige' onClick={() => handleTabClick('technology')}>
                                <Link className='flex pl-2 pr-16 items-center' href='/topic/technology' >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Tech</p>
                                </Link>
                            </div>
                        }

                        {/* <div className='flex items-center hover:border-t-4 border-guard-topic-pink'>
                            <Link className='flex pl-2 pr-16 items-center' href='/topic/football' >
                                <p className='text-2xl font-serif pl-2 font-bold text-white'>Projects</p>
                            </Link>
                        </div> */}
                        {!isCondensed &&

                            <div className='w-px bg-guard-div-blue h-2/3'/>
                        }
                        {!isCondensed &&

                        <div className='flex items-center'>
                            <Link className='flex pl-2 pr-16 items-center' href='/topic/football' >
                                <p className='text-2xl font-serif pl-2 text-white hover:text-guard-yellow'>More</p>
                            <HiChevronDown className='pl-2 ' color={'#ffff'} size={20}/>
                            </Link>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header