import axios from 'axios';

export default  getGeoLoc = async (req, res) => {
  try {
    const { data: ipInfo } = await axios.get('https://ipinfo.io');
    const { loc } = ipInfo;

    // Use the 'loc' value to fetch weather data from your weather API
    // Example: Fetch weather data using the 'loc' value

    return loc

    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
};