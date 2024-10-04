const fetch = require('node-fetch');
require('dotenv').config();

const API_KEY = process.env.API_KEY; // Asegúrate de tener el secreto correctamente configurado
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

async function getWeather(city) {
  if (!city) {
    throw new Error("City is required");
  }

  const url = `${BASE_URL}?key=${API_KEY}&q=${city}`;
  console.log(`Requesting URL: ${url}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }
    const data = await response.json();
    return {
      temperature: data.current.temp_c,
      description: data.current.condition.text,
      city: data.location.name,
      country: data.location.country
    };
  } catch (error) {
    throw new Error(`Unable to get weather data: ${error.message}`);
  }
}
