import mayorCities from "./mayorCitiesList";

import getRandomIndex from "./getRandomIndex";
import capitalizeWords from "./capitalizeWords";
import transformMetersToKm from "./transformMeterToKm";

const getCurrentWeather = async (latitude = null, longitude = null, name = null) => {
  const mayorCity = mayorCities[getRandomIndex(mayorCities)];
  const lat = latitude ? latitude : mayorCity.latitude;
  const lon = longitude ? longitude : mayorCity.longitude
  const cityName = name ? name : mayorCity.name;

  window.defaultCity = mayorCity;

  const locationTitle = document.querySelector('.location__title');
  const currentDegrees = document.querySelector('.degrees-container__degrees');
  const currentWeatherState = document.querySelector('.degrees-container__state');
  const currentPrecipitation = document.querySelector('#precipitation');
  const currentHumidity = document.querySelector('#humidity');
  const currentWind = document.querySelector('#wind');

  try {
    const response = await fetch(`/api/current/weather?lat=${lat}&lon=${lon}`);
    const responseData = await response.json();

    locationTitle.innerHTML = `${cityName}`;
    currentDegrees.innerHTML = `${Math.floor(responseData.main.temp)}&deg;`;
    currentWeatherState.innerHTML = capitalizeWords(responseData.weather[0].description);
    currentWind.innerHTML = `${Math.ceil(transformMetersToKm(responseData.wind.speed))} Km/h`;
    currentPrecipitation.innerHTML = responseData.rain ? `${responseData.rain['1h']} mm` : 'Unavailable';
    currentHumidity.innerHTML = `${responseData.main.humidity}%`;

    return responseData;
  } catch(err) {
    console.log('Error retrieving current weather: ', err);
  }
};

export default getCurrentWeather;
