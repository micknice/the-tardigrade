import React, { useEffect, useState } from 'react'
import { getArticleByArticleId, getArticleFromArticleId } from '../pages/api/news/newsApi'
import {getPostAge, getShortenedTitle} from '../utils/utils'




const SmallArticleCard = ({article}) => {

    const [actualArticle, setActualArticle] = useState(null)
    

    useEffect(() => {
        if(article) {
            const fetchArticle = async() => {
                const articleActual = await getArticleByArticleId(article.article_id)
                setActualArticle(articleActual)
                
            }
            fetchArticle()
        }
    }, [article])

    

    if (article && article.topic === 'coding') {
        return (
            <div className=' pt-1 h-full w-full '>
                <div className='col-span-1 border-t-[1px] border-guard-topictext-red h-full  bg-guard-topictile-red grid grid-rows-4'>
                    {article &&
                        <p className='text-guard-topictext-red  text-lg font-black font-serif px-2 row-span-1'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                    }
                    
                        {article &&
                            <p className='text-guard-subhead  text-lg font-medium font-serif leading-5 px-2 row-span-2'>{getShortenedTitle(article.title)}</p>
                        }
                        {article &&
                            <p className='text-guard-posted text-xs pt-2 px-2 row-span-1'>{getPostAge(article.created_at)}</p>
                        }
                </div>

            </div>
        )
    } else if (article && article.topic === 'cooking') {
        return (
            <div className=' pt-1 h-full w-full '>
                <div className='col-span-1 border-t-[1px] border-guard-topictext-orange h-full  bg-guard-topictile-orange grid grid-rows-4'>
                    {article &&
                        <p className='text-guard-topictext-orange  text-lg font-black font-serif px-2 row-span-1'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                    }
                        {article &&
                            <p className='text-guard-subhead  text-lg font-medium font-serif leading-5 px-2 row-span-2'>{getShortenedTitle(article.title)}</p>
                        }
                        {article &&
                            <p className='text-guard-posted text-xs pt-2 px-2 row-span-1'>{getPostAge(article.created_at)}</p>
                        }
                </div>

            </div>
        )
    } else if (article && article.topic === 'football') {
        return (
            <div className=' pt-1 h-full w-full '>
                <div className='col-span-1 border-t-[1px] border-guard-topictext-sky h-full  bg-guard-topictile-sky grid grid-rows-4'>
                    {article &&
                        <p className='text-guard-topictext-sky  text-lg font-black font-serif px-2 row-span-1'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                    }
                        {article &&
                            <p className='text-guard-subhead  text-lg font-medium font-serif leading-5 px-2 row-span-2'>{getShortenedTitle(article.title)}</p>
                        }
                        {article &&
                            <p className='text-guard-posted text-xs pt-2 px-2 row-span-1'>{getPostAge(article.created_at)}</p>
                        }
                </div>

            </div>
        )
    }
}


export default SmallArticleCard