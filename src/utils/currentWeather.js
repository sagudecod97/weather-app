import mayorCities from "./mayorCitiesList";

import getRandomIndex from "./getRandomIndex";
import capitalizeWords from "./capitalizeWords";
import transformMetersToKm from "./transformMeterToKm";

const getCurrentWeather = async (latitude = null, longitude = null, name = null) => {
  const URL_API = process.env.API_WEATHER;
  const API_KEY = process.env.API_KEY_WEATHER;

  const mayorCity = mayorCities[getRandomIndex(mayorCities)];
  const lat = latitude ? latitude : mayorCity.latitude;
  const lon = longitude ? longitude : mayorCity.longitude
  const cityName = name ? name : mayorCity.name;

  const locationTitle = document.querySelector('.location__title');
  const currentDegrees = document.querySelector('.degrees-container__degrees');
  const currentWeatherState = document.querySelector('.degrees-container__state');
  const currentPrecipitation = document.querySelector('#precipitation');
  const currentHumidity = document.querySelector('#humidity');
  const currentWind = document.querySelector('#wind');

  try {
    const response = await fetch(`${URL_API}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    const responseData = await response.json();

    locationTitle.innerHTML = `${cityName}`;
    currentDegrees.innerHTML = `${Math.floor(responseData.main.temp)}&deg;`;
    currentWeatherState.innerHTML = capitalizeWords(responseData.weather[0].description);
    currentWind.innerHTML = `${Math.ceil(transformMetersToKm(responseData.wind.speed))} Km/h`;
    currentPrecipitation.innerHTML = responseData.rain ? `${responseData.rain['1h']} mm` : 'Unavailable';
    currentHumidity.innerHTML = `${responseData.main.humidity}%`;
  } catch(err) {
    console.log('Error retrieving current weather: ', err);
  }
};

export default getCurrentWeather;
