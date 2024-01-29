import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {HiChevronDown} from 'react-icons/hi2'
import GuardLogo from '../public/assets/tard.png'
import Image from 'next/image'
import SupportButtonMobile from './SupportButtonMobile'

const HeaderMobile = () => {
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
                <div className=' w-full h-full pt-9 grid grid-rows-3 '>
                    <div className='row-span-2 grid grid-cols-3 px-2 mb-2  items-center'>
                        <div className='col-span-1 grid grid-rows-2  justify-start'>
                            <div className='row-span-3 flex flex-col items-center justify-start'>
                                <div className='h-4'/>

                                <SupportButtonMobile/>
                                <div className='h-4'/>
                            </div>
                        </div>
                        <div className='col-span-2 pl-4'>
                            <div className='h-full w-full  flex  items-end justify-center'>
                                <Image height={50} src={GuardLogo} alt='/'/>
                            </div>
                        </div>
                    </div>
                    <div className='w-full row-span-1  '>
                        <div className='flex h-full border-t-[1px] border-guard-div-blue  '>
                            

                            {tabTopic && tabTopic === 'news' &&
                                <div className='flex items-end border-t-4 border-guard-topic-orange pl-2 pr-2' onClick={() => handleTabClick('news')}>
                                    <Link className='flex  items-end' href='/topic/news' >
                                        <p className='text-lg font-serif font-bold text-white tracking-tighter'>News</p>
                                    </Link>
                                </div>
                            }
                            {tabTopic !== 'news'  &&
                                <div className='flex items-end hover:border-t-4 border-guard-topic-orange pl-2 pr-2' onClick={() => handleTabClick('news')}>
                                    <Link className='flex  items-end' href='/topic/news' >
                                        <p className='text-lg font-serif font-bold text-white tracking-tighter'>News</p>
                                    </Link>
                                </div>
                            }
                            <div className='w-px bg-guard-div-blue h-full '/>
                            {tabTopic && tabTopic === 'coding' &&
                                <div className='flex items-end border-t-4 border-guard-topic-red pl-1 pr-2' onClick={() => handleTabClick('coding')}>
                                    <Link className='flex  items-end ' href={`/topic/coding`} >
                                        <p className='text-lg font-serif font-bold text-white tracking-tighter'>Coding</p>
                                    </Link>
                                </div>
                            }
                            {tabTopic !== 'coding' &&
                                <div className='flex items-end hover:border-t-4 border-guard-topic-red pl-1 pr-2' onClick={() => handleTabClick('coding')}>
                                    <Link className='flex  items-end ' href={`/topic/coding`} >
                                        <p className='text-lg font-serif font-bold text-white tracking-tighter '>Coding</p>
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
                            {tabTopic && tabTopic === 'science' &&
                                <div className='flex items-end border-t-4 border-guard-topic-pink pl-1 pr-2' onClick={() => handleTabClick('science')}>
                                    <Link className='flex  items-end' href='/topic/science' >
                                        <p className='text-lg font-serif font-bold text-white tracking-tighter'>Science</p>
                                    </Link>
                                </div>
                            }
                            {tabTopic !== 'science' &&
                                <div className='flex items-end hover:border-t-4 border-guard-topic-pink pl-1 pr-2' onClick={() => handleTabClick('science')}>
                                    <Link className='flex  items-end' href='/topic/science' >
                                        <p className='text-lg font-serif font-bold text-white tracking-tighter'>Science</p>
                                    </Link>
                                </div>
                            }

                            <div className='w-px bg-guard-div-blue h-full'/>
                            {tabTopic && tabTopic === 'technology' &&
                                <div className='flex items-end border-t-4 border-guard-topic-beige pl-1 pr-2' onClick={() => handleTabClick('technology')}>
                                    <Link className='flex  items-end' href='/topic/technology' >
                                        <p className='text-lg font-serif font-bold text-white tracking-tighter'>Tech</p>
                                    </Link>
                                </div>
                            }
                            {tabTopic !== 'technology' &&
                                <div className='flex items-end hover:border-t-4 border-guard-topic-pink pl-1 pr-2' onClick={() => handleTabClick('technology')}>
                                    <Link className='flex  items-end' href='/topic/technology' >
                                        <p className='text-lg font-serif font-bold text-white tracking-tighter'>Tech</p>
                                    </Link>
                                </div>
                            }
                            
                        </div>
                    </div>
                </div>
                        
                                
                        


                    

                    

            </div>

        </div>
    )
}


export default HeaderMobile