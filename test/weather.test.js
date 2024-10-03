import { expect } from 'chai';
import getWeather from '../src/weather.js'; // Importar la función getWeather 

describe('Weather API', () => {
  it('should return weather data for a valid city', async () => {
    const weather = await getWeather('Mendoza');
    expect(weather).to.have.property('temperature');
    expect(weather).to.have.property('description');
    expect(weather).to.have.property('city');
    expect(weather).to.have.property('country');
  });

  it('should throw an error for an invalid city', async () => {
    try {
      await getWeather('InvalidCity');
    } catch (error) {
      expect(error).to.be.an('error');
    }
  });
});
