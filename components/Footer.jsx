import React from 'react'
import Link from 'next/link'
import {HiChevronDown} from 'react-icons/hi2'
import { RiMoneyPoundCircleFill} from 'react-icons/ri'
import { GoArrowRight} from 'react-icons/go'
import GuardLogo from '../public/assets/tard.png'
import Image from 'next/image'
import SupportButton from './SupportButton'




const Footer = () => {
    return (
        <div className='w-full  bg-white '>
            <div className='w-full  bg-guard-blue-mid px-40 flex items-center justify-center'>
                <div className=' w-5/6 h-full grid grid-rows-5'>
                    {/* topic tabs */}
                    <div className='flex  h-2/3 border-l-[1px] border-b-[1px] border-r-[1px] border-guard-div-blue'>

                        <div className='flex items-center hover:border-t-4 border-guard-topic-red'>
                            <Link className='flex pl-2 pr-20 items-center ' href='/#coding' >
                                <p className='text-2xl font-serif pl-2 font-bold'>Coding</p>
                            </Link>
                        </div>

                        <div className='w-px bg-guard-div-blue h-2/3'/>

                        <div className='flex items-center hover:border-t-4 border-guard-topic-orange'>
                            <Link className='flex pl-2 pr-20 items-center' href='/#cooking' >
                                <p className='text-2xl font-serif pl-2 font-bold '>Cooking</p>
                            </Link>
                        </div>

                        <div className='w-px bg-guard-div-blue h-2/3'/>

                        <div className='flex items-center hover:border-t-4 border-guard-topic-sky'>
                            <Link className='flex pl-2 pr-20 items-center' href='/#football' >
                                <p className='text-2xl font-serif pl-2 font-bold '>Football</p>
                            </Link>
                        </div>


                        <div className='w-px bg-guard-div-blue h-2/3'/>

                        <div className='flex items-center hover:border-t-4 border-guard-topic-pink'>
                            <Link className='flex pl-2 pr-20 items-center' href='/#gaming' >
                                <p className='text-2xl font-serif pl-2 font-bold '>Gaming</p>
                            </Link>
                        </div>

                        <div className='w-px bg-guard-div-blue h-2/3'/>

                        <div className='flex items-center'>
                            <Link className='flex pl-2 pr-20 items-center' href='/#skills' >
                                <p className='text-2xl font-serif pl-2  hover:text-guard-yellow'>More</p>
                            <HiChevronDown className='pl-2 ' size={20}/>
                            </Link>
                        </div>


                    </div>
                    
                    {/* header */}
                    <div className='row-span-4 h-[20rem]  grid grid-cols-3 pt-5'>
                        {/* left header */}
                        <div className='col-span-2 h-full w-full items-center px-8'>
                            
                        </div>
                        {/* <div></div> */}
                        {/* right header */}
                        <div className='h-full '>
                            <div className=' col-span-1 h-2/3 w-full flex items-center justify-center flex-col pr-20 pb-20 row-span-1'>
                                <p className='text-[32px] font-serif font-bold text-guard-yellow'>Support the Tardigrade</p>
                                <p className='text-[16px] font-bold font-sans  '>Fund independent journalism with £5 per month</p>
                                <div className='h-3'></div>
                                <SupportButton/>
                            </div>
                        </div>

                    </div>

                    

                </div>
            </div>

        </div>
    )
}


export default Footer