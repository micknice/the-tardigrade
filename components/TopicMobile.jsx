import React, { useEffect, useState } from 'react'
import BigArticleCardMobile from './BigArticleCardMobile'
import MediumArticleCardMobile from './MediumArticleCardMobile'
import SmallArticleCardMobile from './SmallArticleCardMobile'
import WeatherWidgetMobile from './WeatherWidgetMobile'
import { getArticlesByTopic } from '../pages/api/news/newsApi'

const TopicMobile = ( {topic} ) => {

    const [headlinesArr, setHeadlinesArr] = useState([])

    useEffect(() => {
        const fetchArticles = async() => {
            if (topic) {
                const articlesArr = await getArticlesByTopic(topic)
                setHeadlinesArr(articlesArr)
            }
        }
        fetchArticles()

    }, [topic])

    return (
        <div className='h-full w-full bg-white flex  justify-center items-center '>
            <div className='h-full w-full flex items-center justify-center '>
                <div className='w-full h-full border-l-[1px] border-t-[1px] border-r-[1px] border-guard-div-grey '>
                    <div className=' border-b-[1px] h-10 border-guard-div-grey'>
                            <WeatherWidgetMobile/>
                    </div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className='h-full w-full justify-center items-center '>
                        <div className='h-1 '/>
                            <BigArticleCardMobile article={headlinesArr[0]}/>
                            <MediumArticleCardMobile article={headlinesArr[1]}/>
                            <MediumArticleCardMobile article={headlinesArr[2]}/>
                            <SmallArticleCardMobile article={headlinesArr[3]}/>
                            <BigArticleCardMobile article={headlinesArr[4]}/>
                            <SmallArticleCardMobile article={headlinesArr[5]}/>
                            <SmallArticleCardMobile article={headlinesArr[6]}/>
                            <MediumArticleCardMobile article={headlinesArr[7]}/>
                            <MediumArticleCardMobile article={headlinesArr[8]}/>
                            <SmallArticleCardMobile article={headlinesArr[9]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TopicMobile