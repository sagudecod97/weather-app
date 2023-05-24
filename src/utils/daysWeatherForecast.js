import Sun from '../assets/images/sun.svg';
import mayorCities from "./mayorCitiesList";

import getRandomIndex from "./getRandomIndex";

const getDaysWeatherForecast = async (latitude = null, longitude = null) => {
  const API_URL = process.env.API_WEATHER;
  const API_KEY = process.env.API_KEY_WEATHER;

  const mayorCity = mayorCities[getRandomIndex(mayorCities)];
  const lat = latitude ? latitude : mayorCity.latitude;
  const lon = longitude ? longitude : mayorCity.longitude;

  try {
    const response = await fetch(`${API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    const responseData = await response.json();

    console.log("Response data: ", responseData);
  } catch(err) {

  }
  const forecastListItem = `
  <div class="forecast-item forecast-item--current-day">
    <p class="forecast-item__day">
      Mon
    </p>

    <div class="forecast-item__icon">
      <img src=${Sun} alt="forecast icon" />
    </div>

    <p class="forecast-item__degree">
      22&deg;
    </p>

    <p class="forecast-item__degree">
      16&deg;
    </p>
  </div>
  `;
};

export default getDaysWeatherForecast;
