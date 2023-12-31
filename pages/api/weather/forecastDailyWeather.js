import axios from 'axios';

export default async function getDailyForecastWeatherReport(coordStr)  {
    return new Promise((resolve, reject) => {
      
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${coordStr}&aqi=no&days=2&hours=24`)
        .then((response) => {
            const weatherArr1 = response.data.forecast.forecastday[0].hour
            const weatherArr2 = response.data.forecast.forecastday[1].hour
            const weatherArr3 = weatherArr1.concat(weatherArr2)
            const currentHour = getCurrentHourInGMT()
            const idx = currentHour + 1
            const finalWeatherArr = [weatherArr3[idx], weatherArr3[idx + 3], weatherArr3[idx + 6], weatherArr3[idx + 9]]
            resolve(finalWeatherArr)
        })
        .catch((error) => {
            console.log(error, 'error')
            reject(error)
        })
    })
}



function getCurrentHourInGMT() {
    // Get the current time in GMT
    const now = new Date();
    const gmtTime = new Date(now.toUTCString().substr(0, 25));
  
    // Get the hour and minute components
    const hours = gmtTime.getUTCHours();
    const minutes = gmtTime.getUTCMinutes();
  
    // Round to the nearest hour
    let roundedHour;
    if (minutes >= 30) {
      roundedHour = hours + 1;
    } else {
      roundedHour = hours;
    }
  
    // Ensure the result is within the 0-24 range
    if (roundedHour < 0) {
      roundedHour = 0;
    } else if (roundedHour > 24) {
      roundedHour = 24;
    }
  
    return roundedHour;
  }




