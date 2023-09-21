import React, { useEffect, useState } from 'react'
import { capitalizeAuthor, formatDate } from '../utils/utils'
import ButtonFb from './ButtonFb'
import ButtonX from './ButtonX'
import ButtonMail from './ButtonMail'


const ArticleInfo = ({article}) => {

    if (article && article.topic === 'coding') {
        return (
            <div className=' h-[380px] col-span-1 pt-3 px-3'>

                <div className=' bg-gray h-[300px] grid grid-rows-4  '>
                    <div className=''>
                        {article &&
                            <p className='text-guard-topicheadtext-red text-2xl font-black font-serif'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                        }
                        
                    </div>
                    <div className='border-b-[1px] border-guard-div-grey pt-2 flex flex-row'>
                        
                        
                        

                    </div>
                    <div className='border-guard-div-grey'>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row'/>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row'/>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row'/>
                    {article &&

                        <p className='text-guard-topicheadtext-red text-lg font-bold font-serif'>{capitalizeAuthor(article.author)}</p>
                    }
                    {article &&
                        <p className='text-guard-posted text-xs pt-2 pb-1'>{formatDate(article.created_at)}</p>

                    }
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row '/>
                        
                    </div>
                    <div className=' border-guard-div-grey pt-3 flex flex-row '>
                            <ButtonFb topic={article.topic}/>
                        <div className='w-1'/>
                            <ButtonX topic={article.topic}/>
                        <div className='w-1'/>
                            <ButtonMail topic={article.topic}/>
                        
                       
                    </div>

                </div>
            </div>
        )
    } else if (article && article.topic === 'cooking') {
        return (
            <div className=' h-[380px] col-span-1 pt-3 px-3'>

                <div className=' bg-gray h-[300px] grid grid-rows-4  '>
                    <div className=''>
                        {article &&
                            <p className='text-guard-topicheadtext-orange text-2xl font-black font-serif'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                        }
                        
                    </div>

                    <div className='border-b-[1px] border-guard-div-grey pt-2 flex flex-row' />

                    <div className='border-guard-div-grey'>
                        <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row'/>
                        <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row'/>
                        <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row'/>
                        {article &&

                            <p className='text-guard-topicheadtext-orange text-lg font-bold font-serif'>{capitalizeAuthor(article.author)}</p>
                        }
                        {article &&
                            <p className='text-guard-posted text-xs pt-2 pb-1'>{formatDate(article.created_at)}</p>

                        }
                        <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row '/>
                    </div>
                    <div className=' border-guard-div-grey pt-3 flex flex-row '>
                            <ButtonFb topic={article.topic}/>
                        <div className='w-1'/>
                            <ButtonX topic={article.topic}/>
                        <div className='w-1'/>
                            <ButtonMail topic={article.topic}/>
                        
                       
                    </div>

                </div>
            </div>
        )
    } else if (article && article.topic === 'football') {
        return (
            <div className=' h-[380px] col-span-1 pt-3 px-3'>

                <div className=' bg-gray h-[300px] grid grid-rows-4  '>
                    <div className=''>
                        {article &&
                            <p className='text-guard-topicheadtext-sky text-2xl font-black font-serif'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                        }
                        
                    </div>
                    <div className='border-b-[1px] border-guard-div-grey pt-2 flex flex-row'>
                        
                        
                        

                    </div>
                    <div className='border-guard-div-grey'>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row'/>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row'/>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row'/>
                    {article &&

                        <p className='text-guard-topicheadtext-sky text-lg font-bold font-serif'>{capitalizeAuthor(article.author)}</p>
                    }
                    {article &&
                        <p className='text-guard-posted text-xs pt-2 pb-1'>{formatDate(article.created_at)}</p>

                    }
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row '/>
                        
                    </div>
                    <div className=' border-guard-div-grey pt-3 flex flex-row '>
                            <ButtonFb topic={article.topic}/>
                        <div className='w-1'/>
                            <ButtonX topic={article.topic}/>
                        <div className='w-1'/>
                            <ButtonMail topic={article.topic}/>
                        
                       
                    </div>

                </div>
            </div>
        )
    }
}

export default ArticleInfo