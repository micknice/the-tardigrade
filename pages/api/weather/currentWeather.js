import axios from 'axios';

export default async function getCurrentWeatherReport(coordStr)  {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${coordStr}&aqi=no`)
        .then((response) => {
            resolve(response.data)
        })
        .catch((error) => {
            console.log(error, 'error')
            reject(error)
        })
    })
}




