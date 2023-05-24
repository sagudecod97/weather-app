import '../styles/mainTemplate.css';
import Location from '../assets/images/location.svg';
import Umbrella from '../assets/images/umbrella.svg';
import Raindrops from '../assets/images/raindrops.svg';
import Wind from '../assets/images/wind.svg';

import Sun from '../assets/images/sun.svg';

const MainTemplate = `
<div class="wait-location wait-location--active">
</div>

<div class="weather__container">
  <div class="location">
    <div class="location__icon">
      <img src="${Location}" alt="location">
    </div>

    <p class="location__title">
      Location
    </p>

    <p class="location__date">
      Monday, 1 January 9:00
    </p>
  </div>


  <div class="degrees-container">
    <p class="degrees-container__degrees">
      22&deg;
    </p>

    <p class="degrees-container__state">
      Cloudy
    </p>
  </div>

  <div class="stats">
    <div class="statistics">
      <div class="statistics__icon">
        <img src="${Umbrella}" alt="Umbrella"/>
      </div>

      <p class="statistics__percentage">
        30&percnt;
      </p>

      <p class="statistics__title">
        Precipitation
      </p>
    </div>

    <div class="statistics">
      <div class="statistics__icon">
        <img src="${Raindrops}" alt="Umbrella"/>
      </div>

      <p class="statistics__percentage">
        20&percnt;
      </p>

      <p class="statistics__title">
        Humidity
      </p>
    </div>

    <div class="statistics">
      <div class="statistics__icon">
        <img src="${Wind}" alt="Umbrella"/>
      </div>

      <p class="statistics__percentage">
        12 km/h
      </p>

      <p class="statistics__title">
        Precipitation
      </p>
    </div>
  </div>
</div>

<div class="forecast">
  <p class="forecast__title">
    8-Day Forescasts
  </p>

  <div class="forecast__list">
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

    <div class="forecast-item">
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

    <div class="forecast-item">
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

    <div class="forecast-item">
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

    <div class="forecast-item">
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

    <div class="forecast-item">
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

    <div class="forecast-item">
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
  </div>
</div>
`;

export default MainTemplate;
