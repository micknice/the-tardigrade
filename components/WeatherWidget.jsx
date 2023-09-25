"use client"
import React, { useEffect, useState } from 'react'
import getCurrentWeatherReport  from '../pages/api/weather/currentWeather'
import getDailyForecastWeatherReport from '../pages/api/weather/forecastDailyWeather'
import ReactLoading from 'react-loading';
import {HiChevronDown} from 'react-icons/hi2'


const WeatherWidget = () => {

    const getTimeStr = (weatherObj) => {
        const splitArr = weatherObj.time.split(' ')
        return splitArr[1]
    }

    const [position, setPosition] = useState(null)
    const [weather, setWeather] = useState(null)
    const [dailyWeather, setDailyWeather] = useState(null)
    const success = (pos) => {
        console.log('pos', pos)
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      const coordStr = `${latitude}, ${longitude}`
      if(pos.coords.latitude && pos.coords.longitude) {
        setPosition(coordStr)

      }
    }
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
            .query({ name: "geolocation" })
            .then((result) => {
                if(result.state === 'granted') {
                    const getLoc = () => {
                      const loc = navigator.geolocation.getCurrentPosition(success)
                      console.log('loc', loc)
                    }
                    getLoc()
                }
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

    },[])


    useEffect(() => {
        if (position) {
            const fetchReport = async() => {
                    const report = await getCurrentWeatherReport(position)
                    setWeather(report)
            } 
            const fetchDaily = async() => {
                const dailyReport = await getDailyForecastWeatherReport(position)
                setDailyWeather(dailyReport)
            }
            fetchReport() 
            fetchDaily()
                
        }

    }, [position])

    return (
        <div className=' h-[380px] col-span-1 pt-3 px-3'>

            <div className=' bg-gray h-[300px] grid grid-rows-4  '>
                <div className='border-b-[1px] border-guard-div-grey'>
                    <p className='text-black text-2xl font-black font-serif'>Headlines</p>
                    {weather &&
                    
                    <p className='text-guard-subhead text-lg  font-sans'>{weather.location.name}</p>
                    
                }
                </div>
                <div className='border-b-[1px] border-guard-div-grey pt-2 flex flex-row'>
                    {!weather &&
                        <ReactLoading type={'bars'} color={'#dcdcdc'}/>
                    }
                    {weather &&
                    <img className='pb-2' src={weather.current.condition.icon} alt='/'></img>
                    
                }
                    <div className='grid grid-rows-3'>
                        {position &&

                            <p className='text-guard-subhead text-xs row-span-1 pt-2'>{position}</p>
                        }
                        {/* <p className='text-guard-subhead text-xs row-span-1 pt-2'>Now</p> */}
                        {weather &&
                            <p className='text-guard-subhead text-2xl font-semibold row-span-2'>{`${weather.current.temp_c}°C`}</p>
                        }

                    </div>

                </div>
                <div className='border-guard-div-grey grid grid-cols-4'>
                    <div className='border-r-[1px] border-guard-div-grey flex flex-col'>
                        {dailyWeather &&
                            <p className='text-guard-subhead text-xs'>{getTimeStr(dailyWeather[0])}</p>
                        }
                        {dailyWeather &&
                            <p className='text-guard-subhead text-sm font-semibold'>{`${dailyWeather[0].temp_c}°C`}</p>
                        }
                        {dailyWeather &&
                            <img className='pb-2' src={dailyWeather[0].condition.icon} alt='/'></img>
                        }
                        
                        
                    </div>
                    <div className='border-r-[1px] border-guard-div-grey flex flex-col'>
                        {dailyWeather &&
                            <p className='text-guard-subhead text-xs'>{getTimeStr(dailyWeather[1])}</p>
                        }
                        {dailyWeather &&
                            <p className='text-guard-subhead text-sm font-semibold'>{`${dailyWeather[1].temp_c}°C`}</p>
                        }
                        {dailyWeather &&
                            <img className='pb-2' src={dailyWeather[1].condition.icon} alt='/'></img>
                        }

                    </div>
                    <div className='border-r-[1px] border-guard-div-grey flex flex-col'>
                    {dailyWeather &&
                            <p className='text-guard-subhead text-xs'>{getTimeStr(dailyWeather[2])}</p>
                        }
                        {dailyWeather &&
                            <p className='text-guard-subhead text-sm font-semibold'>{`${dailyWeather[2].temp_c}°C`}</p>
                        }
                        {dailyWeather &&
                            <img className='pb-2' src={dailyWeather[2].condition.icon} alt='/'></img>
                        }
                    </div>
                    <div className='border-guard-div-grey flex flex-col'>
                    {dailyWeather &&
                            <p className='text-guard-subhead text-xs'>{getTimeStr(dailyWeather[3])}</p>
                        }
                        {dailyWeather &&
                            <p className='text-guard-subhead text-sm font-semibold'>{`${dailyWeather[3].temp_c}°C`}</p>
                        }
                        {dailyWeather &&
                            <img className='pb-2' src={dailyWeather[3].condition.icon} alt='/'></img>
                        }
                    </div>
                </div>
                <div className=' border-guard-div-grey pt-3 flex flex-row '>
                    {/* <p className='text-guard-subhead text-md  font-sans pt-4 '>View full forecast</p>
                    <HiChevronDown className='pl-2 self-center pb-2' size={20}/> */}
                </div>

            </div>
        </div>
    )
}

export default WeatherWidget