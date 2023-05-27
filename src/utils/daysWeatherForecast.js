import getIconWeather from './iconWeather';

const getDaysWeatherForecast = async (latitude = null, longitude = null) => {
  try {
    const mayorCity = window.defaultCity;
    const lat = latitude ? latitude : mayorCity.latitude;
    const lon = longitude ? longitude : mayorCity.longitude;
    const forecastList = document.querySelector('.forecast__list');
    const forecastListItemArray = [];

    const response = await fetch(`/api/forecast?lat=${lat}&lon=${lon}`);
    const responseData = await response.json();

    for (let i = 0; i < 5 ; i++) {
      const currentIndex = [3, 11, 19, 27, 35, 39, 39, 39];
      const currentDay = responseData.list[currentIndex[i]];
      const dayName = new Date(currentDay['dt_txt']).toLocaleString('en-US', { weekday: 'long' });
      const forecastItemNode = document.createElement('div');

      forecastItemNode.classList.add('forecast-item');

      if (i === 0)
        forecastItemNode.classList.add('forecast-item--current-day');

      const forecastListItem = `
          <p class="forecast-item__day">
            ${dayName.slice(0,3)}
          </p>

          <div class="forecast-item__icon">
            <img src=${getIconWeather(currentDay.weather[0].main)} alt="forecast icon" />
          </div>

          <p class="forecast-item__degree">
            ${Math.ceil(currentDay.main['temp_max'])}&deg;
          </p>

          <p class="forecast-item__degree">
          ${Math.floor(currentDay.main['temp_min'])}&deg;
          </p>
      `;

      forecastItemNode.innerHTML = forecastListItem;
      forecastListItemArray.push(forecastItemNode);
    };

    forecastList.innerHTML = '';
    forecastList.append(...forecastListItemArray);

    return responseData;
  } catch(err) {
    console.error('Error getting days forecast: ', err);
  }
};

export default getDaysWeatherForecast;
