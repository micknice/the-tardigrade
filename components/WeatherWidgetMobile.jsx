"use client"
import React, { useEffect, useState } from 'react'
import getCurrentWeatherReport  from '../pages/api/weather/currentWeather'
import getDailyForecastWeatherReport from '../pages/api/weather/forecastDailyWeather'
import ReactLoading from 'react-loading';


const WeatherWidget = () => {

    const getTimeStr = (weatherObj) => {
        const splitArr = weatherObj.time.split(' ')
        return splitArr[1]
    }

    const [position, setPosition] = useState(null)
    const [weather, setWeather] = useState(null)
    const [dailyWeather, setDailyWeather] = useState(null)
    const success = (pos) => {
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
                    }
                    getLoc()
                } else if (result.state === 'prompt') {
                    const getLoc = () => {
                      const loc = navigator.geolocation.getCurrentPosition(success)
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
        <div className=' h-18 pt-1 px-2 '>
            <div className=' bg-gray  grid grid-cols-2  '>
                <div className='col-span-1'>
                    <p className='text-black text-2xl font-black font-serif tracking-tighter'>Headlines</p>
                </div>
                <div className='col-span-1'>
                    <div className=' border-guard-div-grey  flex flex-row h-12 items-center justify-end'>
                        {!weather &&
                            <ReactLoading type={'bars'} color={'#dcdcdc'}/>
                        }
                        {weather && weather.current.condition.icon &&
                        <img className='pb-3 h-12' src={weather.current.condition.icon} alt='/'></img>
                        
                        }
                        <div className='grid grid-rows-3 h-10'>
                            {weather &&
                                <p className='text-guard-subhead text-lg font-semibold row-span-2'>{`${weather.current.temp_c}°C`}</p>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WeatherWidget