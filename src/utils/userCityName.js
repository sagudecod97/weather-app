const getUserCityName = async (latitude, longitude) => {
  const API_KEY = process.env.API_KEY_LOCATION;
  const API_URL = process.env.API_LOCATION;
  const locationTitle = document.querySelector('.location__title');

  const URL = `${API_URL}/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

  try {
    const response = await fetch(URL);
    const responseData = await response.json();

    const results = responseData.results;

    if (results.length > 0) {
      const addressComponents = results[0].address_components;

      for (const component of addressComponents) {
        if (component.types.includes('locality')) {
          const cityName = component.long_name;
          locationTitle.innerHTML = cityName;

          return cityName;
        }
      }
    }
  
    console.log('City not found.');
  } catch(err) {
    console.error('Error retrieving city name:', err);
  }
};

export default getUserCityName;
