import React, {useState } from 'react'
import { GoMail } from 'react-icons/go'

const ButtonMail = ({topic}) => {
    
    const [hover, setHover] = useState(false)
    
    const handleMouseOver = () => {
        setHover(true)
    }
    const handleMouseOff = () => {
        setHover(false)
    }
    return (
        <div className='h-full' onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOff}>
            {!hover && topic === 'coding' &&
                <div className='border-[1px] border-guard-div-grey rounded-full h-[32px] w-[32px] flex flex-row pl-[4px] pt-[5px] '>
                    <GoMail className='flex ' color='#c70000' size={20}/>
                </div>
            }
            {!hover && topic === 'cooking' &&
                <div className='border-[1px] border-guard-div-grey rounded-full h-[32px] w-[32px] flex flex-row pl-[4px] pt-[5px] '>
                    <GoMail className='flex ' color='#c74600' size={20}/>
                </div>
            }
            {!hover && topic === 'football' &&
                <div className='border-[1px] border-guard-div-grey rounded-full h-[32px] w-[32px] flex flex-row pl-[4px] pt-[5px] '>
                    <GoMail className='flex ' color='#056890' size={20}/>
                </div>
            }
            {hover && topic === 'coding' &&
                <div className='border-[1px] border-guard-div-grey rounded-full h-[32px] w-[32px] flex flex-row pl-[4px] pt-[5px] bg-guard-topicheadtext-red'>
                    <GoMail className='flex ' color='#FFFFFF' size={20}/>
                </div>
            }
            {hover && topic === 'cooking' &&
                <div className='border-[1px] border-guard-div-grey rounded-full h-[32px] w-[32px] flex flex-row pl-[4px] pt-[5px] bg-guard-topicheadtext-orange'>
                    <GoMail className='flex ' color='#FFFFFF' size={20}/>
                </div>
            }
            {hover && topic === 'football' &&
                <div className='border-[1px] border-guard-div-grey rounded-full h-[32px] w-[32px] flex flex-row pl-[4px] pt-[5px] bg-guard-topicheadtext-sky'>
                    <GoMail className='flex ' color='#FFFFFF' size={20}/>
                </div>
            }
        </div>
    )
}

export default ButtonMail