import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {HiChevronDown} from 'react-icons/hi2'
import GuardLogo from '../public/assets/tard.png'
import Image from 'next/image'
import SupportButtonMobile from './SupportButtonMobile'

const FooterMobile = () => {

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
        <div className='w-auto  h-34 bg-guard-blue-mid  '>
            <div className='w-full bg-guard-blue-mid'>
                <div className=' w-full h-full grid grid-rows-3 '>
                    
                    <div className='w-full row-span-1  '>
                        <div className='flex h-full   '>
                        {tabTopic && tabTopic === 'coding' &&
                            <div className='flex items-end border-t-4 border-guard-topic-red pl-2 pr-2' onClick={() => handleTabClick('coding')}>
                                <Link className='flex  items-end ' href={`/topic/coding`} >
                                    <p className='text-lg font-serif font-bold text-white tracking-tighter'>Coding</p>
                                </Link>
                            </div>
                        }
                        {tabTopic !== 'coding' &&
                            <div className='flex items-end hover:border-t-4 border-guard-topic-red pl-2 pr-2' onClick={() => handleTabClick('coding')}>
                                <Link className='flex  items-end ' href={`/topic/coding`} >
                                    <p className='text-lg font-serif font-bold text-white tracking-tighter '>Coding</p>
                                </Link>
                            </div>
                        }
                        <div className='w-px bg-guard-div-blue h-full '/>
                        {tabTopic && tabTopic === 'cooking' &&
                            <div className='flex items-end border-t-4 border-guard-topic-orange pl-1 pr-2' onClick={() => handleTabClick('cooking')}>
                                <Link className='flex  items-end' href='/topic/cooking' >
                                    <p className='text-lg font-serif font-bold text-white tracking-tighter'>Cooking</p>
                                </Link>
                            </div>
                        }
                        {tabTopic !== 'cooking'  &&
                            <div className='flex items-end hover:border-t-4 border-guard-topic-orange pl-1 pr-2' onClick={() => handleTabClick('cooking')}>
                                <Link className='flex  items-end' href='/topic/cooking' >
                                    <p className='text-lg font-serif font-bold text-white tracking-tighter'>Cooking</p>
                                </Link>
                            </div>
                        }
                        <div className='w-px bg-guard-div-blue h-full'/>
                        {tabTopic && tabTopic === 'football' &&
                            <div className='flex items-end border-t-4 border-guard-topic-sky pl-1 pr-2' onClick={() => handleTabClick('football')}>
                                <Link className='flex  items-end' href='/topic/football' >
                                    <p className='text-lg font-serif font-bold text-white tracking-tighter'>Football</p>
                                </Link>
                            </div>
                        }
                        {tabTopic !== 'football' &&
                            <div className='flex items-end hover:border-t-4 border-guard-topic-sky pl-1 pr-2' onClick={() => handleTabClick('football')}>
                                <Link className='flex  items-end' href='/topic/football' >
                                    <p className='text-lg font-serif font-bold text-white tracking-tighter'>Football</p>
                                </Link>
                            </div>
                        }

                        <div className='w-px bg-guard-div-blue h-full'/>
                        {tabTopic && tabTopic === 'projects' &&
                            <div className='flex items-end border-t-4 border-guard-topic-pink pl-1 pr-2' onClick={() => handleTabClick('projects')}>
                                <Link className='flex  items-end' href='/' >
                                    <p className='text-lg font-serif font-bold text-white tracking-tighter'>Projects</p>
                                </Link>
                            </div>
                        }
                        {tabTopic !== 'projects' &&
                            <div className='flex items-end hover:border-t-4 border-guard-topic-pink pl-1 pr-2' onClick={() => handleTabClick('projects')}>
                                <Link className='flex  items-end' href='/' >
                                    <p className='text-lg font-serif font-bold text-white tracking-tighter'>Projects</p>
                                </Link>
                            </div>
                        }

                        {/* <div className='flex items-end hover:border-t-4 border-guard-topic-pink pl-1 pr-2'>
                            <Link className='flex  items-end' href='/topic/football' >
                                <p className='text-lg font-serif font-bold text-white tracking-tighter'>Projects</p>
                            </Link>
                        </div> */}

                        


                    </div>
                    



                    </div>
                    
                    <div className='row-span-2 grid grid-cols-3 px-2 mb-2 border-t-[1px] border-guard-div-blue'>
                        <div className='col-span-2'>
                            <div className='h-full w-full  flex  items-end justify-center'>
                                <Image height={50} src={GuardLogo} alt='/'/>
                            </div>
                        </div>
                        <div className=' grid grid-rows-2 items-start justify-center pb-2'>
                            <div></div>
                            <SupportButtonMobile/>
                        </div>
                    </div>
                    <div className='h-3'></div>
                </div>
                        
                                
                        


                    

                    

            </div>

        </div>
    )
}


export default FooterMobile