import getUserCityName from "./userCityName";
import getCurrentWeather from "./currentWeather";
import getDaysWeatherForecast from "./daysWeatherForecast";

const getUserLocation = () => {
  const waitLocationModal = document.querySelector('.wait-location');

  const closeWaitLocationModal = () => {
    waitLocationModal.classList.remove('wait-location--active');
    waitLocationModal.classList.add('wait-location--hide');
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const userCityName = await getUserCityName(latitude, longitude);

          getCurrentWeather(latitude, longitude, userCityName);
          getDaysWeatherForecast(latitude, longitude);

          window.userLatitude = latitude;
          window.userLongitude = longitude;

          closeWaitLocationModal();
        } catch(err) {
          console.log('Error while waiting for city name');
        }
      },
      (error) => {
        console.error('Error getting geolocation:', error);
        getCurrentWeather();
        getDaysWeatherForecast();
        closeWaitLocationModal();
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
};

export default getUserLocation;
