import React, { useEffect, useState } from 'react'
import BigArticleCard from './BigArticleCard'
import MediumArticleCard from './MediumArticleCard'
import SmallArticleCard from './SmallArticleCard'
import WeatherWidget from './WeatherWidget'
import WeatherWidgetMobile from './WeatherWidgetMobile'
import { getArticlesByTopic } from '../pages/api/news/newsApi'
import { useMediaQuery } from '@mui/material'

const Topic = ( {topic} ) => {
    const isCondensed = useMediaQuery('(max-width: 1470px)');

    const [headlinesArr, setHeadlinesArr] = useState([])

    useEffect(() => {
        const fetchArticles = async() => {
            if (topic) {
                const articlesArr = await getArticlesByTopic(topic)
                console.log(articlesArr[0], 'llllll')
                setHeadlinesArr(articlesArr)
            }
        }
        fetchArticles()

    }, [topic])

    return (
        <div className='h-full w-full bg-white flex  justify-center items-center px-40'>
            <div className='h-full w-5/6 flex items-center justify-center'>
                <div className='w-full h-full border-l-[1px] border-t-[1px] border-r-[1px] border-guard-div-grey '>
                    <div className=' border-b-[1px] h-10 border-guard-div-grey'>
                        {isCondensed &&
                            <WeatherWidgetMobile/>
                        }
                    </div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                    <div className='h-full w-full justify-center items-center '>
                        
                        {!isCondensed &&
                        <div className='flex flex-col h-42'>
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
                                
                                <div className='col-span-1 h-2 '></div>
                                <div className='col-span-1 '></div>
                            </div>
                            
                        </div>
                        
                        }

                        {isCondensed &&
                        <div className='grid grid-rows-2 gap-y-2'>
                            
                            <div className=' grid grid-cols-4 px-2  gap-x-3 row-span-1 h-24 '>
                                <div className='col-span-2'><MediumArticleCard article={headlinesArr[0]}/></div>
                                <div className='col-span-2'><MediumArticleCard article={headlinesArr[1]}/></div>
                            </div>

                            <div className='h-full grid grid-cols-4 px-2  gap-x-3 row-span-1 '>
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
                            </div>
                                <div className='col-span-1 h-1'></div>
                                
                        </div>
                        }

                    </div>
                    <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                            <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                            <div className=' border-b-[1px] h-1 border-guard-div-grey'></div>
                            <div className=' border-b-[1px] h-10 border-guard-div-grey'/>
                </div>
            </div>
        </div>
    )

    
}


export default Topic