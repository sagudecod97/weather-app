const getUserCityName = async (latitude, longitude) => {
  const locationTitle = document.querySelector('.location__title');

  try {
    const response = await fetch(`/api/city?lat=${latitude}&lon=${longitude}`);
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
