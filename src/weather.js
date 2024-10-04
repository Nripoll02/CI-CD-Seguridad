import fetch from 'node-fetch'; 
import dotenv from 'dotenv'; 

dotenv.config(); // Cargar las variables de entorno

const API_KEY = process.env.API_KEY; // Clave de la API desde el archivo .env
const BASE_URL = 'http://api.weatherapi.com/v1/current.json'; // URL base de WeatherAPI

async function getWeather(city) {
  if (!city) {
    throw new Error("Se requiere una ciudad");
  }
  
  const url = `${BASE_URL}?q=${city}&key=${API_KEY}`; 

  try {
    console.log(`Solicitando URL: ${url}`);
    const response = await fetch(url);
    
    if (!response.ok) {
      console.log(`Error: ${response.status} - ${response.statusText}`);
      throw new Error(`Error al obtener los datos del clima: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      temperature: data.current.temp_c, // Usar temp_c para grados Celsius
      description: data.current.condition.text, // Descripción del clima
      city: data.location.name,
      country: data.location.country
    };
  } catch (error) {
    console.error(`No se pueden obtener los datos del clima: ${error.message}`);
    throw new Error(`No se pueden obtener los datos del clima: ${error.message}`);
  }
}

export default getWeather;
