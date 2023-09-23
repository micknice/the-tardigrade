import React, { useEffect, useState } from 'react'
import { getArticleByArticleId, getArticleFromArticleId } from '../pages/api/news/newsApi'
import { getPostAge } from '../utils/utils'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import ReactLoading from 'react-loading';





const BigArticleCard = ({article}) => {

    const [actualArticle, setActualArticle] = useState(null)
    const [actualArticleBody, setActualArticleBody] = useState(null)
    

    useEffect(() => {
        if(article) {
            const fetchArticle = async() => {
                const articleActual = await getArticleByArticleId(article.article_id)
                setActualArticle(articleActual)
                const fullBodySplitArr = articleActual.body.split(/[.?]/)
                let fullBody = `${fullBodySplitArr[0]}.`
                if(fullBody.length < 60) {
                    fullBody = `${fullBodySplitArr[0]} ${fullBodySplitArr[1]}.`
                }
                if (fullBody.length > 120) {
                    const slice = fullBody.slice(0, 225)
                    fullBody = `${slice}...`
                }
                setActualArticleBody(fullBody)
            }
            fetchArticle()
        }
    }, [article])
    
    if(article) {
        return (
            <div className='col-span-3  pt-3 h-38 max-h-38 min-h-38'>
                <Link href={`/article/${article.article_id}`}>
                        <div className=' h-full w-full grid grid-cols-3  bg-guard-topictext-red '>
                            <div className=' col-span-1 h-full   hover:bg-guard-topicheadtext-red px-2 '>
                                {/* text */}
                                <div className=' h-full flex flex-col gap-y-1'>
                                    {article &&
                                        <div className='h-auto flex flex-row gap-x-3 pb-3'>
                                            <p className='text-white  text-2xl font-black font-serif tracking-tighter'>Live</p>
                                            <div className=' h-4 w-4 bg-white rounded-full self-center'></div>
                                        </div>
                                    }
                                    {article &&
                                        <p className='text-white  text-2xl font-medium font-serif leading-7'>{article.title}</p>
                                    }
                                    {actualArticleBody &&
                                        <p className='text-white text-base font-serif leading-tight pt-2'>{actualArticleBody}</p>
                                    }
                                    <div className='h-3'></div>
                                    <div className='w-1/2 border-t-[1px] border-guard-div-grey pt-2'/>
                                </div>
                            </div>
                                {/* picture */}
                                <div className='col-span-2 w-full  object-cover'>
                                    {actualArticle &&
                                    <img className='object-contain w-full h-auto' src={actualArticle.article_img_url}  alt='/'/>
            
                                    }
                
                                </div>                    
                        </div>
                 </Link>
            </div>
        )
    }
}

export default BigArticleCard