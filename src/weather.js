import fetch from 'node-fetch'; 
import dotenv from 'dotenv'; 

dotenv.config(); // Cargar las variables de entorno

const API_KEY = process.env.API_KEY; // Clave de la API desde el archivo .env
const BASE_URL = 'http://api.weatherapi.com/v1/current.json'; // URL base de WeatherAPI

async function getWeather(city) {
  if (!city) {
    throw new Error("City is required");
  }
  
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`; // URL completa con la ciudad y la clave de la API

  try {
    console.log(`Requesting URL: ${url}`);
    const response = await fetch(url);
    
    if (!response.ok) {
      console.log(`Error: ${response.status} - ${response.statusText}`);
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      temperature: data.main.temp,
      description: data.weather[0].description,
      city: data.name,
      country: data.sys.country
    };
  } catch (error) {
    console.error(`Unable to get weather data: ${error.message}`);
    throw new Error(`Unable to get weather data: ${error.message}`);
  }
}


export default getWeather;
