import getWeather from './weather.js'; // Importar la función getWeather

async function main() {
  try {
    const city = process.argv[2] || 'London'; // Tomar el nombre de la ciudad desde la línea de comandos
    const weather = await getWeather(city);
    console.log(`Current temperature in ${weather.city}, ${weather.country}: ${weather.temperature}°C`);
    console.log(`Weather description: ${weather.description}`);
  } catch (error) {
    console.error(error.message);
  }
}

main();
