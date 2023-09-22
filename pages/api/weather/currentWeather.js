import axios from 'axios';

export default async function getCurrentWeatherReport(coordStr)  {
    console.log(coordStr, 'coordStr')
    return new Promise((resolve, reject) => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=bc6526e02d764054a1061905231809&q=${coordStr}&aqi=no`)
        .then((response) => {
            console.log(response.data, 'response.data')
            resolve(response.data)
        })
        .catch((error) => {
            console.log(error, 'error')
            reject(error)
        })
    })
}




