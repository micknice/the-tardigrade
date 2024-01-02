import axios from 'axios';

export default async function getCurrentWeatherReport(coordStr) {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${coordStr}&aqi=no`);
    return response.data;
  } catch (error) {
    console.error(error, 'error');
    throw error;
  }
}




