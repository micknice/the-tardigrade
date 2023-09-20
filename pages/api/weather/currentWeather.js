import axios from 'axios';

export default async function getCurrentWeatherReport(coordStr)  {
    const apiKey = 'mL8Vxm#8+kNVUZW'
    return new Promise((resolve, reject) => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=bc6526e02d764054a1061905231809&q=Leeds`)
        .then((response) => {
            console.log('apiresult', response.data)
            resolve(response.data)
        })
        .catch((error) => {
            console.log(error, 'error')
            reject(error)
        })
    })
}




