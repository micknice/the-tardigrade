import axios from 'axios';

export default async function getCurrentWeatherReport(coordStr) {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=bc6526e02d764054a1061905231809&q=Leeds&aqi=no`);
    console.log(response.data, 'response.data');
    return response.data;
  } catch (error) {
    console.error(error, 'error');
    throw error;
  }
}




