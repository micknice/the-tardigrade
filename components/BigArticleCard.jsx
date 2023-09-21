import React, { useEffect, useState } from 'react'
import { getArticleByArticleId, getArticleFromArticleId } from '../pages/api/news/newsApi'
import { getPostAge } from '../utils/utils'
import Link from 'next/link'





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
    
    if(article && article.topic === 'coding') {
        return (
        
            <div className='col-span-3  pt-3 h-38 max-h-38 min-h-38'>
                <Link href={`/article/${article.article_id}`}>
                        <div className=' h-full w-full grid grid-cols-3 pr-3 bg-guard-topictile-red hover:bg-guard-topictile-hover-red'>
                            <div className=' col-span-1 h-full border-t-[1px] border-guard-topictext-red hover:bg-guard-topictile-hover-red px-2'>
                                {/* text */}
                                <div className=' h-full border-t-[1px] '>
                                    {article &&
                                        <p className='text-guard-topictext-red  text-2xl font-black font-serif tracking-tighter'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                                    }
                                    {article &&
                                        <p className='text-guard-subhead  text-2xl font-medium font-serif leading-7'>{article.title}</p>
                                    }
                                    {actualArticleBody &&
                                        <p className='text-guard-subhead text-base font-serif leading-tight pt-2'>{actualArticleBody}</p>
                                    }
                                    <p className='text-guard-posted text-xs pt-2 pb-3'>{getPostAge(article.created_at)}</p>
                                    <div className='w-1/2 border-t-[1px] border-guard-div-grey pt-2'/>
                                </div>
                            </div>
                                {/* picture */}
                                <div className='col-span-2 w-[492px]  object-cover'>
                                    {actualArticle &&
                                    <img className='object-contain w-full h-auto' src={actualArticle.article_img_url}  />
            
                                    }
                
                                </div>                    
                        </div>
                 </Link>
            </div>
        )
    } else if(article && article.topic === 'cooking') {
        return (
            <div className='col-span-3  pt-3 h-38 max-h-38 min-h-38'>
                <Link href={`/article/${article.article_id}`}>
                    <div className='  h-full w-full grid grid-cols-3 pr-3 bg-guard-topictile-orange hover:bg-guard-topictile-hover-orange'>
                        <div className=' col-span-1 h-full border-t-[1px] border-guard-topictext-orange'>
                            {/* text */}
                            <div className='h-full px-2'>
                                {article &&
                                    <p className='text-guard-topictext-orange  text-2xl font-black font-serif tracking-tighter'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                                }
                                {article &&
                                    <p className='text-guard-subhead  text-2xl font-medium font-serif leading-7'>{article.title}</p>
                                }
                                {actualArticleBody &&
                                    <p className='text-guard-subhead text-base font-serif leading-tight pt-2'>{actualArticleBody}</p>
                                }
                                <p className='text-guard-posted text-xs pt-2 pb-3'>{getPostAge(article.created_at)}</p>
                                <div className='w-1/2 border-t-[1px] border-guard-div-grey pt-2'/>
                            </div>
                        </div>
                            {/* picture */}
                            <div className='col-span-2 w-[492px] h-full  object-cover'>
                                {actualArticle &&
                                <img className='object-contain w-full h-auto' src={actualArticle.article_img_url}  />
        
                                }
            
                            </div>                    
                    </div>
                </Link>
            </div>
        )
    } else if (article && article.topic === 'football') {
        return(

        
            <div className='col-span-3  pt-3 h-38 max-h-38 min-h-38'>
                <Link href={`/article/${article.article_id}`}>
                    <div className=' h-full w-full grid grid-cols-3 bg-guard-topictile-sky hover:bg-guard-topictile-hover-sky'>
                            <div className=' col-span-1 h-full border-t-[1px] border-guard-topictext-sky'>
                                {/* text */}
                                <div className='h-full px-2'>
                                    {article &&
                                        <p className='text-guard-topictext-sky  text-2xl font-black font-serif tracking-tighter'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                                    }
                                    {article &&
                                        <p className='text-guard-subhead  text-2xl font-medium font-serif leading-7'>{article.title}</p>
                                    }
                                    {actualArticleBody &&
                                        <p className='text-guard-subhead text-base font-serif leading-tight pt-2'>{actualArticleBody}</p>
                                    }
                                    <p className='text-guard-posted text-xs pt-2 pb-3'>{getPostAge(article.created_at)}</p>
                                    <div className='w-1/2 border-t-[1px] border-guard-div-grey pt-2'/>
                                </div>
                            </div>
                                {/* picture */}
                                <div className='col-span-2 w-full'>
                                    {actualArticle &&
                                    <img className='object-contain w-full h-auto' src={actualArticle.article_img_url}  />
            
                                    }
                
                                </div>                    
                    </div>
                </Link>
            </div>
        )
    }
    
}

export default BigArticleCard