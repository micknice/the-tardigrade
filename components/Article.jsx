import React, { useEffect, useState } from 'react'
import dummyText from '../utils/dummytext'
import { getArticles } from '../pages/api/news/newsApi'
import ArticleInfo from './ArticleInfo'
import MostViewed from './MostViewed'

import ArticleBody from './ArticleBody'


const Article = () => {

    
    const [headlinesArr, setHeadlinesArr] = useState([])

    useEffect(() => {
        const fetchArticles = async() => {
            const articlesArr = await getArticles()
            console.log('articlesArr', articlesArr)
            const headlines = []
            for(let i = 0; i < 10; i++) {
                const randomIndex = Math.floor(Math.random() * (articlesArr.length))
                headlines.push(articlesArr[randomIndex])
            }
            setHeadlinesArr(headlines)
            console.log('set', headlinesArr)
        }
        fetchArticles()

    }, [])





    return (
        <div className=' w-full bg-white flex  justify-center items-center px-40'>
            <div className='h-full w-5/6 flex items-center justify-center '>
                <div className='w-full h-full border-l-[1px] border-t-[1px] border-r-[1px] border-guard-div-grey '>
                    <div className=' border-b-[1px] h-10 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className='h-full w-full justify-center items-center '>
                        

                            <div className='h-full grid grid-cols-5 px-2 pr-8  row-span-1 '>
                                <ArticleInfo article={headlinesArr[0]}/>
                                <div className=' col-span-4 grid grid-cols-3 gap-x-6 pr- '>
                                    <ArticleBody/>
                                    <div className=''>
                                        <MostViewed/>
                                    </div>
                                    
                                </div>
                            </div>

                            
                    </div>
    
                </div>
            </div>

        </div>
    )
}




export default Article