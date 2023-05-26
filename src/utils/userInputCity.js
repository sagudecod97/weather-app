import getCurrentDateString from "./currentDateString";
import getCurrentWeather from "./currentWeather";
import getDaysWeatherForecast from "./daysWeatherForecast";

const getUserInputCity = async (cityName) => {
  const API_URL = process.env.API_WEATHER;
  const API_KEY = process.env.API_KEY_WEATHER;
  
  const currentDateNode = document.querySelector('.location__date');
  const locationNode = document.querySelector('.location__title');

  try {
    const reponse = await fetch(`${API_URL}/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`);
    const responseData = await reponse.json();

    let { lat, lon } = responseData[0];
    const delimiters = /[,.; ]+/;
    const splitCityName = cityName.split(delimiters);
    const currentDate = await getCurrentDateString(false, lat, lon);

    for (let i = 0; i < splitCityName.length; i++) {
      splitCityName[i] = splitCityName[i].charAt(0).toUpperCase() + splitCityName[i].slice(1);
    }

    await getCurrentWeather(lat, lon, splitCityName.join(" "));
    await getDaysWeatherForecast(lat, lon);

    currentDateNode.innerHTML = currentDate;
    locationNode.innerHTML = splitCityName.join(" ");
  } catch(err) {
    console.error('Error while trying to get input city info: ', err);
  }
};

export default getUserInputCity;
