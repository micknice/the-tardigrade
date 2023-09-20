import React, { useEffect, useState } from 'react'
import MostViewedItem from '../components/MostViewedItem'


const MostViewed = () => {

    const dummyImgUrl = 'https://images.pexels.com/photos/17832815/pexels-photo-17832815/free-photo-of-timbyen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const dummyHeadline = 'Fathers have "unique effect" on childrens educational outcomes, study finds.'
    return (
        <div className=' flex flex-col justify-items-center px-2'>
            <div className=' border-b-[1px] h-1 border-guard-div-grey pt-6'/>
            <div className=' border-b-[1px] h-1 border-guard-div-grey pt-[2px]'/>
            <div className=' border-b-[1px] h-1 border-guard-div-grey pt-[2px]'/>
            <div className=' border-b-[1px] h-1 border-guard-div-grey pt-[2px]'/>
            <p className='text-black text-lg font-black font-serif leading-tight'>Most viewed</p>
            
            <MostViewedItem imgUrl={dummyImgUrl} headline={dummyHeadline}/>
            <div className=' border-b-[1px] h-1 border-guard-div-grey '/>
            <MostViewedItem imgUrl={dummyImgUrl} headline={dummyHeadline}/>
            <div className=' border-b-[1px] h-1 border-guard-div-grey '/>
            <MostViewedItem imgUrl={dummyImgUrl} headline={dummyHeadline}/>
            <div className=' border-b-[1px] h-1 border-guard-div-grey '/>
            <MostViewedItem imgUrl={dummyImgUrl} headline={dummyHeadline}/>
            <div className=' border-b-[1px] h-1 border-guard-div-grey '/>
            <MostViewedItem imgUrl={dummyImgUrl} headline={dummyHeadline}/>

    </div>
    )
}

export default MostViewed