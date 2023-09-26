import React from 'react'
import ButtonFb from './ButtonFb'
import ButtonX from './ButtonX'
import ButtonMail from './ButtonMail'
import { PiCameraFill } from 'react-icons/pi'
import Link from 'next/link'
import ArticleInfoMobile from './ArticleInfoMobile'


const ArticleBodyMobile = ({article}) => {
    return (
        <div className='w-full '>
            {article &&
            <div>
                <img src={article.article_img_url} alt='/'></img>
            </div>
            }
            {article &&
            <p className='text-guard-subhead text-3xl font-semibold font-serif leading-tighter tracking-tight px-2 py-1'>
                {article.title}
            </p>
            }
            {article &&
            <ArticleInfoMobile article={article}/>
            }
            {/* <div className='w-full h-8'/> */}
            
            <div className='w-full h-2'/>
            {/* <div className='pt-2 flex gap-x-1 '>
                <PiCameraFill size={20} color='#707070'/>
                <p className='text-guard-posted text-sm text-sans pb-4'></p>
            </div> */}
            {article &&
            <p className='text-guard-subhead text-lg  font-serif px-2'>{article.body}</p>
            }
            <div className=' border-b-[1px] h-5 border-guard-div-grey'></div>
            <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
            <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
            <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
            <p className='text-guard-subhead text-xs'>Explore more on these topics</p>
            <div className='flex flex-row pt-2 gap-x-1'>
                <div className='flex border-guard-topicheadtext-red hover:bg-guard-topicheadtext-red border-[1px] hover: rounded-full' >
                    <Link href='/topic/coding'><p className='text-guard-topicheadtext-red text-sm   hover:text-white font-sans px-2'>Coding</p></Link>
                </div>
                <div className='flex border-guard-topicheadtext-red hover:bg-guard-topicheadtext-red border-[1px] rounded-full'>
                    <Link href='/topic/cooking'><p className='text-guard-topicheadtext-red text-sm  hover:text-white font-sans px-2'>Cooking</p></Link>
                </div>
                <div className='flex border-guard-topicheadtext-red hover:bg-guard-topicheadtext-red border-[1px] rounded-full'>
                    <Link href='/topic/football'><p className='text-guard-topicheadtext-red text-sm hover:text-white  font-sans px-2'>Football</p></Link>
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




export default ArticleBodyMobile