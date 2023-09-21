import React, { useEffect, useState } from 'react'
import dummyText from '../utils/dummytext'
import ButtonFb from './ButtonFb'
import ButtonX from './ButtonX'
import ButtonMail from './ButtonMail'
import { PiCameraFill } from 'react-icons/pi'


const ArticleBody = ({article}) => {
    console.log(article)

    return (
        <div className='col-span-2 w-11/12 px-2 pt-2'>
            <p className='text-guard-subhead text-3xl font-black font-serif leading-tighter tracking-tight'>
                {article.title}
            </p>
            <div className='w-full h-8'/>
            <p className='text-guard-subhead text-lg font-black font-serif leading-snug tracking-tighter'>
                Plans set to be announced on Friday could include delaying ban on sales of new petrol and diesel cars
            </p>
            <div className='w-full h-1'/>
            <div>
                <img src={article.article_img_url}></img>
            </div>
            
            <div className='pt-2 flex gap-x-1 '>
                <PiCameraFill size={20} color='#707070'/>
                <p className='text-guard-posted text-sm text-sans pb-4'> Rishi Sunak said some stuff about some very important matters find out more below.</p>
            </div>
            <p className='text-guard-subhead  font-serif'>{article.body}</p>
            <div className=' border-b-[1px] h-5 border-guard-div-grey'></div>
            <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
            <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
            <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
            <p className='text-guard-subhead text-xs'>Explore more on these topics</p>
            <div className='flex flex-row pt-2 gap-x-1'>
                <div className='flex border-guard-topicheadtext-red border-[1px] rounded-full'>
                    <p className='text-guard-topicheadtext-red text-sm font-sans px-2'>Coding</p>
                </div>
                <div className='flex border-guard-topicheadtext-red border-[1px] rounded-full'>
                    <p className='text-guard-topicheadtext-red text-sm font-sans px-2'>Cooking</p>
                </div>
                <div className='flex border-guard-topicheadtext-red border-[1px] rounded-full'>
                    <p className='text-guard-topicheadtext-red text-sm font-sans px-2'>Football</p>
                </div>
            </div>
            <div className=' border-b-[1px] h-3 border-guard-div-grey'></div>
            <div className='flex flex-row gap-x-1 pt-2'>
                <ButtonFb topic={'coding'}/>
                <ButtonX topic={'coding'}/>
                <ButtonMail topic={'coding'}/>
            </div>
            <div className=' h-10 border-guard-div-grey'></div>

        </div>
    )
}




export default ArticleBody