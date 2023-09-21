import React, { useEffect, useState } from 'react'
import BigArticleCard from './BigArticleCard'
import MediumArticleCard from './MediumArticleCard'
import SmallArticleCard from './SmallArticleCard'
import WeatherWidget from './WeatherWiget'
import { getArticlesByTopic } from '../pages/api/news/newsApi'

const Main = ( {topic} ) => {

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
        <div className='h-screen w-full bg-white flex  justify-center items-center px-40'>
            <div className='h-full w-5/6 flex items-center justify-center '>
                <div className='w-full h-full border-l-[1px] border-t-[1px] border-r-[1px] border-guard-div-grey '>
                    <div className=' border-b-[1px] h-10 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className='h-full w-full justify-center items-center '>
                        
                        <div className='grid grid-rows-2 h-42'>

                            <div className='h-full grid grid-cols-5 px-2 pr-20 gap-x-3 row-span-1 '>
                                <WeatherWidget/>
                                <BigArticleCard article={headlinesArr[0]}/>
                                <MediumArticleCard article={headlinesArr[1]}/>
                            </div>

                            <div className='h-full grid grid-cols-5 px-2 pr-20 gap-x-3 row-span-1 '>

                                <div></div>

                                <MediumArticleCard article={headlinesArr[2]}/>
                                <MediumArticleCard article={headlinesArr[3]}/>

                                <div className=' h-full grid grid-rows-3 pt-2'>
                                    <SmallArticleCard article={headlinesArr[4]}/>
                                    <SmallArticleCard article={headlinesArr[5]}/>
                                    <SmallArticleCard article={headlinesArr[6]}/>
                                </div>

                                <div className=' h-full grid grid-rows-3 pt-2'>
                                    <SmallArticleCard article={headlinesArr[7]}/>
                                    <SmallArticleCard article={headlinesArr[8]}/>
                                    <SmallArticleCard article={headlinesArr[9]}/>
                                </div>
                                
                                
                                <div className='col-span-1 '></div>
                                <div className='col-span-1 '></div>
    
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>

        </div>
    )
}


export default Main