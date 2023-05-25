import '../styles/mainTemplate.css';
import Location from '../assets/images/location.svg';
import Umbrella from '../assets/images/umbrella.svg';
import Raindrops from '../assets/images/raindrops.svg';
import Search from '../assets/images/search.svg';
import Close from '../assets/images/circle-xmark.svg';
import Wind from '../assets/images/wind.svg';

import Sun from '../assets/images/sun.svg';

const MainTemplate = `
<div class="wait-location wait-location--active">
</div>

<div class="search-modal search-modal--hide">
  <div class="modal">
    <div class="icons">
      <div class="icons__icon icons__icon--search">
        <img src="${Search}" alt="location">
      </div>

      <div class="icons__icon icons__icon--close">
        <img src="${Close}" alt="location">
      </div>
    </div>

    <p class="modal__search">
      Stay in the know with any city's weather
    </p>

    <div class="search">
      <input class="search__input" type="text" placeholder="City's name"/>
      <button class="serch__button">
        Search
      </button>
    </div>
  </div>
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

      <p class="statistics__percentage" id="precipitation">
        30 mm
      </p>

      <p class="statistics__title">
        Precipitation
      </p>
    </div>

    <div class="statistics">
      <div class="statistics__icon">
        <img src="${Raindrops}" alt="rain drops"/>
      </div>

      <p class="statistics__percentage" id="humidity">
        20&percnt;
      </p>

      <p class="statistics__title">
        Humidity
      </p>
    </div>

    <div class="statistics">
      <div class="statistics__icon">
        <img src="${Wind}" alt="Wind"/>
      </div>

      <p class="statistics__percentage" id="wind">
        12 km/h
      </p>

      <p class="statistics__title">
        Wind
      </p>
    </div>
  </div>
</div>

<div class="forecast">
  <p class="forecast__title">
    5-Days Forescasts
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
  </div>
</div>
`;

export default MainTemplate;
