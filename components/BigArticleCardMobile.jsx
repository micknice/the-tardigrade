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
        
            <div className='  pt-3 h-38 max-h-38 min-h-38'>
                <Link href={`/article/${article.article_id}`}>
                        <div className=' h-full w-full  px-2 bg-guard-topictile-red hover:bg-guard-topictile-hover-red'>
                                <div className=' w-full  object-cover border-t-[1px] border-guard-topictext-red'>
                                    {actualArticle &&
                                    <img className='object-contain w-full h-auto' src={actualArticle.article_img_url}  alt='/'/>
                                    }
                                </div>                    
                            <div className='  h-full  hover:bg-guard-topictile-hover-red px-2'>
                                {/* text */}
                                <div className=' h-full border-t-[1px] '>
                                    {article &&
                                        <p className='text-guard-topictext-red  text-2xl font-black font-serif tracking-tighter'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                                    }
                                    {article &&
                                        <p className='text-guard-subhead  text-2xl font-medium font-serif leading-7'>{article.title}</p>
                                    }
                                    <p className='text-guard-posted text-xs pt-2 pb-3'>{getPostAge(article.created_at)}</p>
                                    <div className='w-1/3 border-t-[1px] border-guard-div-grey pt-2'/>
                                </div>
                            </div>
                        </div>
                 </Link>
            </div>
        )
    } else if(article && article.topic === 'news') {
        return (
            <div className='  pt-3 h-38 max-h-38 min-h-38'>
                <Link href={`/article/${article.article_id}`}>
                        <div className=' h-full w-full  px-2 bg-guard-topictile-orange hover:bg-guard-topictile-hover-orange'>
                                <div className=' w-full  object-cover border-t-[1px] border-guard-topictext-orange'>
                                    {actualArticle &&
                                    <img className='object-contain w-full h-auto' src={actualArticle.article_img_url}  alt='/'/>
                                    }
                                </div>                    
                            <div className='  h-full  hover:bg-guard-topictile-hover-orange px-2'>
                                {/* text */}
                                <div className=' h-full border-t-[1px] '>
                                    {article &&
                                        <p className='text-guard-topictext-orange  text-2xl font-black font-serif tracking-tighter'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                                    }
                                    {article &&
                                        <p className='text-guard-subhead  text-2xl font-medium font-serif leading-7'>{article.title}</p>
                                    }
                                    <p className='text-guard-posted text-xs pt-2 pb-3'>{getPostAge(article.created_at)}</p>
                                    <div className='w-1/3 border-t-[1px] border-guard-div-grey pt-2'/>
                                </div>
                            </div>
                        </div>
                 </Link>
            </div>
        )
    } else if (article && article.topic === 'football') {
        return (
            <div className='  pt-3 h-38 max-h-38 min-h-38'>
                <Link href={`/article/${article.article_id}`}>
                        <div className=' h-full w-full  px-2 bg-guard-topictile-sky hover:bg-guard-topictile-hover-sky'>
                                <div className=' w-full  object-cover border-t-[1px] border-guard-topictext-red'>
                                    {actualArticle &&
                                    <img className='object-contain w-full h-auto' src={actualArticle.article_img_url}  alt='/'/>
                                    }
                                </div>                    
                            <div className='  h-full  hover:bg-guard-topictile-hover-sky px-2'>
                                {/* text */}
                                <div className=' h-full border-t-[1px] '>
                                    {article &&
                                        <p className='text-guard-topictext-sky  text-2xl font-black font-serif tracking-tighter'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                                    }
                                    {article &&
                                        <p className='text-guard-subhead  text-2xl font-medium font-serif leading-7'>{article.title}</p>
                                    }
                                    
                                    <p className='text-guard-posted text-xs pt-2 pb-3'>{getPostAge(article.created_at)}</p>
                                    <div className='w-1/3 border-t-[1px] border-guard-div-grey pt-2'/>
                                </div>
                            </div>
                        </div>
                 </Link>
            </div>
        )
    } else if (article && article.topic === 'science') {
        return (
            <div className='  pt-3 h-38 max-h-38 min-h-38'>
                <Link href={`/article/${article.article_id}`}>
                        <div className=' h-full w-full  px-2 bg-guard-topictile-pink hover:bg-guard-topictile-hover-pink'>
                                <div className=' w-full  object-cover border-t-[1px] border-guard-topictext-pink'>
                                    {actualArticle &&
                                    <img className='object-contain w-full h-auto' src={actualArticle.article_img_url}  alt='/'/>
                                    }
                                </div>                    
                            <div className='  h-full  hover:bg-guard-topictile-hover-pink px-2'>
                                {/* text */}
                                <div className=' h-full border-t-[1px] '>
                                    {article &&
                                        <p className='text-guard-topictext-pink  text-2xl font-black font-serif tracking-tighter'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                                    }
                                    {article &&
                                        <p className='text-guard-subhead  text-2xl font-medium font-serif leading-7'>{article.title}</p>
                                    }
                                    
                                    <p className='text-guard-posted text-xs pt-2 pb-3'>{getPostAge(article.created_at)}</p>
                                    <div className='w-1/3 border-t-[1px] border-guard-div-grey pt-2'/>
                                </div>
                            </div>
                        </div>
                 </Link>
            </div>
        )
    } else if (article && article.topic === 'technology') {
        return (
            <div className='  pt-3 h-38 max-h-38 min-h-38'>
                <Link href={`/article/${article.article_id}`}>
                        <div className=' h-full w-full  px-2 bg-guard-topictile-beige hover:bg-guard-topictile-hover-beige'>
                                <div className=' w-full  object-cover border-t-[1px] border-guard-topictext-beige'>
                                    {actualArticle &&
                                    <img className='object-contain w-full h-auto' src={actualArticle.article_img_url}  alt='/'/>
                                    }
                                </div>                    
                            <div className='  h-full  hover:bg-guard-topictile-hover-beige px-2'>
                                {/* text */}
                                <div className=' h-full border-t-[1px] '>
                                    {article &&
                                        <p className='text-guard-topictext-beige  text-2xl font-black font-serif tracking-tighter'>{`${article.topic[0].toUpperCase()}${article.topic.slice(1, article.topic.length)}`}</p>
                                    }
                                    {article &&
                                        <p className='text-guard-subhead  text-2xl font-medium font-serif leading-7'>{article.title}</p>
                                    }
                                    
                                    <p className='text-guard-posted text-xs pt-2 pb-3'>{getPostAge(article.created_at)}</p>
                                    <div className='w-1/3 border-t-[1px] border-guard-div-grey pt-2'/>
                                </div>
                            </div>
                        </div>
                 </Link>
            </div>
        )
    }
    
}

export default BigArticleCard