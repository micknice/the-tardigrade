import React from 'react'
import { capitalizeAuthor, formatDate } from '../utils/utils'
import ButtonFb from './ButtonFb'
import ButtonX from './ButtonX'
import ButtonMail from './ButtonMail'


const ArticleInfoMobile = ({article}) => {

    if (article && article.topic === 'coding') {
        return (
            <div className=' w-full'>
                    <div className='border-b-[1px] border-guard-div-grey pt-2 '/>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] '/>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] '/>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] '/>
                    {article &&
                        <p className='text-guard-topicheadtext-red text-lg font-bold font-serif px-2'>{capitalizeAuthor(article.author)}</p>
                    }
                    {article &&
                        <p className='text-guard-posted text-xs pt-2 pb-1 px-2'>{formatDate(article.created_at)}</p>
                    }
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] flex flex-row '/>
                    <div className=' border-guard-div-grey pt-3 flex flex-row px-2'>
                            <ButtonFb topic={article.topic}/>
                        <div className='w-1'/>
                            <ButtonX topic={article.topic}/>
                        <div className='w-1'/>
                            <ButtonMail topic={article.topic}/>
                    </div>
            </div>
        )
    } else if (article && article.topic === 'cooking') {
        return (
            <div className=' w-full'>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] '/>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] '/>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] '/>
                    {article &&
                        <p className='text-guard-topicheadtext-orange text-lg font-bold font-serif px-2'>{capitalizeAuthor(article.author)}</p>
                    }
                    {article &&
                        <p className='text-guard-posted text-xs pt-2 pb-1 px-2'>{formatDate(article.created_at)}</p>
                    }
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px]  '/>
                    <div className=' border-guard-div-grey pt-3 flex flex-row px-2'>
                            <ButtonFb topic={article.topic}/>
                        <div className='w-1'/>
                            <ButtonX topic={article.topic}/>
                        <div className='w-1'/>
                            <ButtonMail topic={article.topic}/>
                    </div>
            </div>
        )
    } else if (article && article.topic === 'football') {
        return (
            <div className=' w-full'>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] '/>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] '/>
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] '/>
                    {article &&
                        <p className='text-guard-topicheadtext-sky text-lg font-bold font-serif px-2'>{capitalizeAuthor(article.author)}</p>
                    }
                    {article &&
                        <p className='text-guard-posted text-xs pt-2 pb-1 px-2'>{formatDate(article.created_at)}</p>
                    }
                    <div className='border-b-[1px] border-guard-div-grey pt-[3px] '/>
                        
                    <div className=' border-guard-div-grey pt-3 flex flex-row px-2'>
                            <ButtonFb topic={article.topic}/>
                        <div className='w-1'/>
                            <ButtonX topic={article.topic}/>
                        <div className='w-1'/>
                            <ButtonMail topic={article.topic}/>
                    </div>
            </div>
        )
    }
}

export default ArticleInfoMobile