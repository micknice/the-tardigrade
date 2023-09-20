import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {HiChevronDown} from 'react-icons/hi2'
import { RiMoneyPoundCircleFill} from 'react-icons/ri'
import { GoArrowRight} from 'react-icons/go'
import GuardLogo from '../public/assets/gruardlogowhite.png'
import Image from 'next/image'
import SupportButton from './SupportButton'
import Brand from '../public/assets/brandy.jpg'
import BigArticleCard from './BigArticleCard'
import MediumArticleCard from './MediumArticleCard'
import SmallArticleCard from './SmallArticleCard'
import WeatherWidget from './WeatherWiget'
import getCurrentWeatherReport  from '../pages/api/weather/currentWeather'
import getDailyForecastWeatherReport from '../pages/api/weather/forecastDailyWeather'
import ReactLoading from 'react-loading';
import { getArticles } from '../pages/api/news/newsApi'



const Main = () => {

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