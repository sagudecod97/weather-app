const { DateTime } = require('luxon');

async function getCurrentDateString(city, latitude = null, longitude = null ) {
  try {
    let responseCityInfo;
    let dataCityInfo;
    let latitudeCity = latitude;
    let longitudeCity = longitude;

    if (city) {
      responseCityInfo = await fetch(`/api/geolocation?city=${city}`);
      dataCityInfo = await responseCityInfo.json();
    }

    if (!latitude || !longitude) {
      latitudeCity = dataCityInfo[0].lat;
      longitudeCity = dataCityInfo[0].lon;
    }


    const responseTimezone = await fetch(`/api/current/date?lat=${latitudeCity}&lon=${longitudeCity}`);
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
