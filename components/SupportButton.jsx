import React, {useState, useEffect}from 'react'
import { GoArrowRight} from 'react-icons/go'

const SupportButton = () => {
       return (
        <div className='h-[34px] w-[130px] rounded-3xl bg-guard-yellow hover:bg-guard-yellow-button flex items-center justify-center'>
            <p className=' text-[16px] font-bold text-guard-blue-mid pr-2 tracking-tighter'>Support us</p>
            <div className='flex items-center '>
                <GoArrowRight color='#052962' size={26}/>
            </div>
        </div>
       )
}

export default SupportButton