import React, { useEffect, useState } from 'react'
import { getArticles } from '../pages/api/news/newsApi'
import ArticleInfoMobile from './ArticleInfoMobile'
import MostViewed from './MostViewed'
import ArticleBodyMobile from './ArticleBodyMobile'
import dynamic from 'next/dynamic'
import { useMediaQuery } from '@mui/material'

const CommentsMobile = dynamic(() => import("./CommentsMobile"), { ssr: false });

const ArticleMobile = ({article}) => {
    const isCondensed = useMediaQuery('(max-width: 1470px)');
    
    const [headlinesArr, setHeadlinesArr] = useState([])

    useEffect(() => {
        const fetchArticles = async() => {
            const articlesArr = await getArticles()
            const headlines = []
            for(let i = 0; i < 10; i++) {
                const randomIndex = Math.floor(Math.random() * (articlesArr.length))
                headlines.push(articlesArr[randomIndex])
            }
            setHeadlinesArr(headlines)
        }
        fetchArticles()

    }, [])

    return (
        <div className=' w-full bg-white flex  justify-center items-center '>
            <div className='h-full w-full flex items-center justify-center '>
                <div className='w-full h-full  border-t-[1px]  border-guard-div-grey '>
                    <div className=' border-b-[1px] h-9 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className='h-full w-full justify-center items-center '> 
                        <ArticleBodyMobile article={article}/>
                        <CommentsMobile article={article}/>
                    </div> 
                </div>
            </div>
        </div>
    )
}




export default ArticleMobile