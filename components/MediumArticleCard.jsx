import React, { useEffect, useState } from 'react'
import { getArticleByArticleId, getArticleFromArticleId } from '../pages/api/news/newsApi'
import { getPostAge } from '../utils/utils'
import Link from 'next/link'




const MediumArticleCard = ({article}) => {

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

    

    if(article && article.topic === 'coding') {
        return (
            <div className=' col-span-1  pt-3  w-full '>
                <Link href={`/article/${article.article_id}`}>
                    <div className='h-full w-full  bg-guard-topictile-red hover:bg-guard-topictile-hover-red'>
                    {actualArticle &&
                        <img className='h-2/5 w-full object-cover' src={actualArticle.article_img_url}/>
    
                    }
                        <div className='h-2/5'>
                            {article &&
                                <p className='text-guard-topictext-red  text-xl font-black font-serif px-2'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                            }
                            {article &&
                                <p className='text-guard-subhead  text-xl font-medium font-serif leading-5 px-2'>{article.title}</p>
                            }
                        </div>
                        {article &&
                            <p className='text-guard-posted text-xs pt-12 px-2'>{getPostAge(article.created_at)}</p>
                        }
                    </div>
                </Link>
            </div>
        )
    } else if(article && article.topic === 'cooking') {
        return (
            <div className=' col-span-1  pt-3 h-full w-full '>
                <Link href={`/article/${article.article_id}`}>
                    <div className='h-full w-full  bg-guard-topictile-orange hover:bg-guard-topictile-hover-orange'>
                    {actualArticle &&
                        <img className='h-2/5 w-full object-cover' src={actualArticle.article_img_url}/>
    
                    }
                        <div className='h-2/5'>
                            {article &&
                                <p className='text-guard-topictext-orange  text-xl font-black font-serif px-2'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                            }
                            {article &&
                                <p className='text-guard-subhead  text-xl font-medium font-serif leading-5 px-2'>{article.title}</p>
                            }
                        </div>
                        {article &&
                            <p className='text-guard-posted text-xs pt-12 px-2'>{getPostAge(article.created_at)}</p>
                        }
                    </div>
                </Link>
            </div>
        )
    } else if(article && article.topic === 'football') {
        return (
            <div className=' col-span-1  pt-3 h-full w-full '>
                <Link href={`/article/${article.article_id}`}>
                    <div className='h-full w-full  bg-guard-topictile-sky hover:bg-guard-topictile-hover-sky'>
                    {actualArticle &&
                        <img className='h-2/5 w-full object-cover' src={actualArticle.article_img_url}/>
    
                    }
                        <div className='h-2/5'>
                            {article &&
                                <p className='text-guard-topictext-sky  text-xl font-black font-serif px-2'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                            }
                            {article &&
                                <p className='text-guard-subhead  text-xl font-medium font-serif leading-5 px-2'>{article.title}</p>
                            }
                        </div>
                        {article &&
                            <p className='text-guard-posted text-xs pt-12 px-2'>{getPostAge(article.created_at)}</p>
                        }
                    </div>
                </Link>
            </div>
        )
    }
}


export default MediumArticleCard