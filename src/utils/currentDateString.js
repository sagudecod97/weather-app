const { DateTime } = require('luxon');
const API_KEY_WEATHER = process.env.API_KEY_WEATHER;
const API_URL_WEATHER = process.env.API_WEATHER;
const API_KEY_TIMEZONE = process.env.API_KEY_TIMEZONE;
const API_URL_TIMEZONE = process.env.API_TIMEZONE;

async function getCurrentDateString(city) {
  try {
    const responseCityInfo = await fetch(`${API_URL_WEATHER}/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY_WEATHER}`);
    const dataCityInfo = await responseCityInfo.json();

    const { lat, lon } = dataCityInfo[0];

    const responseTimezone = await fetch(
      `${API_URL_TIMEZONE}/v2.1/get-time-zone?key=${API_KEY_TIMEZONE}&format=json&by=position&lat=${lat}&lng=${lon}`
    );
    const dataTimezone = await responseTimezone.json();
  
    const { zoneName } = dataTimezone;
    const dateTime = DateTime.now().setZone(zoneName);
    const currentTime = dateTime.toLocaleString(DateTime.TIME_24_SIMPLE);
    let day = dateTime.toLocaleString({ weekday: 'long' });
    let month = dateTime.toLocaleString({ month: 'long' });

    day = day.charAt(0).toUpperCase() + day.slice(1);
    month = month.charAt(0).toUpperCase() + month.slice(1);

    const currentDate = `${day}, ${dateTime.toFormat('dd')} ${month} ${currentTime}`

    return currentDate;
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }
};

export default getCurrentDateString;
