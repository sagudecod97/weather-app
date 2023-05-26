const { DateTime } = require('luxon');
const API_KEY_WEATHER = process.env.API_KEY_WEATHER;
const API_URL_WEATHER = process.env.API_WEATHER;
const API_KEY_TIMEZONE = process.env.API_KEY_TIMEZONE;
const API_URL_TIMEZONE = process.env.API_TIMEZONE;

async function getCurrentDateString(city, latitude = null, longitude = null ) {
  try {
    let responseCityInfo;
    let dataCityInfo;
    let latitudeCity = latitude;
    let longitudeCity = longitude;

    if (city) {
      responseCityInfo = await fetch(`${API_URL_WEATHER}/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY_WEATHER}`);
      dataCityInfo = await responseCityInfo.json();
    }

    if (!latitude || !longitude) {
      latitudeCity = dataCityInfo[0].lat;
      longitudeCity = dataCityInfo[0].lon;
    }


    const responseTimezone = await fetch(
      `${API_URL_TIMEZONE}/v2.1/get-time-zone?key=${API_KEY_TIMEZONE}&format=json&by=position&lat=${latitudeCity}&lng=${longitudeCity}`
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
