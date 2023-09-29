import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {HiChevronDown} from 'react-icons/hi2'
import SupportButton from './SupportButton'
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mui/material'


const Footer = () => {
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
        <div className='w-full  bg-white '>
            <div className='w-full  bg-guard-blue-mid px-40 flex items-center justify-center'>
                <div className=' w-5/6 h-full grid grid-rows-5'>
                    {/* topic tabs */}
                    <div className='flex  h-2/3 border-l-[1px] border-b-[1px] border-r-[1px] border-guard-div-blue'>
                        {tabTopic && tabTopic === 'coding' &&
                            <div className='flex items-center border-t-4 border-guard-topic-red' onClick={() => handleTabClick('coding')}>
                                <Link className='flex pl-2 pr-20 items-center ' href={`/topic/coding`} >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Coding</p>
                                </Link>
                            </div>
                        }
                        {tabTopic !== 'coding' &&
                            <div className='flex items-center hover:border-t-4 border-guard-topic-red' onClick={() => handleTabClick('coding')}>
                                <Link className='flex pl-2 pr-20 items-center ' href={`/topic/coding`} >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Coding</p>
                                </Link>
                            </div>
                        }

                        <div className='w-px bg-guard-div-blue h-2/3'/>
                        {tabTopic && tabTopic === 'cooking' &&
                            <div className='flex items-center border-t-4 border-guard-topic-orange' onClick={() => handleTabClick('cooking')}>
                                <Link className='flex pl-2 pr-20 items-center' href='/topic/cooking' >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Cooking</p>
                                </Link>
                            </div>
                        }
                        {tabTopic !== 'cooking'  &&
                            <div className='flex items-center hover:border-t-4 border-guard-topic-orange' onClick={() => handleTabClick('cooking')}>
                                <Link className='flex pl-2 pr-20 items-center' href='/topic/cooking' >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Cooking</p>
                                </Link>
                            </div>
                        }

                        <div className='w-px bg-guard-div-blue h-2/3'/>
                        {tabTopic && tabTopic === 'football' &&
                            <div className='flex items-center border-t-4 border-guard-topic-sky' onClick={() => handleTabClick('football')}>
                                <Link className='flex pl-2 pr-20 items-center' href='/topic/football' >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Football</p>
                                </Link>
                            </div>
                        }
                        {tabTopic !== 'football' &&
                            <div className='flex items-center hover:border-t-4 border-guard-topic-sky' onClick={() => handleTabClick('football')}>
                                <Link className='flex pl-2 pr-20 items-center' href='/topic/football' >
                                    <p className='text-2xl font-serif pl-2 font-bold text-white'>Football</p>
                                </Link>
                            </div>
                        }


                        <div className='w-px bg-guard-div-blue h-2/3'/>

                        <div className='flex items-center hover:border-t-4 border-guard-topic-pink'>
                            <Link className='flex pl-2 pr-20 items-center' href='/#gaming' >
                                <p className='text-2xl font-serif pl-2 font-bold text-white'>Projects</p>
                            </Link>
                        </div>
                        {!isCondensed &&
                            <div className='w-px bg-guard-div-blue h-2/3'/>
                        }
                        {!isCondensed &&

                            <div className='flex items-center'>
                            <Link className='flex pl-2 pr-20 items-center' href='/#skills' >
                                <p className='text-2xl font-serif pl-2  hover:text-guard-yellow text-white'>More</p>
                            <HiChevronDown className='pl-2 ' size={20} color={'#ffff'}/>
                            </Link>
                        </div>
                        }


                    </div>
                    
                    {/* header */}
                    <div className='row-span-4 h-[20rem]  grid grid-cols-3 pt-5'>
                        {/* left header */}
                        {/* <div></div> */}
                        <div className='col-span-2 h-full w-full items-center px-8'>
                            <p className='text-[32px] font-serif font-bold text-guard-yellow'>Support the Tardigrade</p>
                            <p className='text-[16px] font-bold font-sans  text-white'>Fund independent journalism with £5 per month</p>
                            <div className='h-3'></div>
                            <SupportButton/>
                        </div>
                        {/* right header */}
                        <div className='h-full  '>
                            <div className=' col-span-1 h-2/3 w-full flex items-center justify-center flex-col pr-20 pb-20 row-span-1'>
                            </div>
                        </div>

                    </div>

                    

                </div>
            </div>

        </div>
    )
}


export default Footer