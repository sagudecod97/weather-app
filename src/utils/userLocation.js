import getUserCityName from "./userCityName";
import getCurrentWeather from "./currentWeather";
import getDaysWeatherForecast from "./daysWeatherForecast";
import getCurrentDateString from "./currentDateString";

const getUserLocation = () => {
  const waitLocationModal = document.querySelector('.wait-location');
  const locationTimeNode = document.querySelector('.location__date');

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

          const dateString = await getCurrentDateString(false, latitude, longitude);
          locationTimeNode.innerHTML = dateString;

          window.userLatitude = latitude;
          window.userLongitude = longitude;

          closeWaitLocationModal();
        } catch(err) {
          console.log('Error while waiting for city name');
        }
      },
      async (error) => {
        try {
          console.error('Error getting geolocation:', error);
          getCurrentWeather();
          getDaysWeatherForecast();
          closeWaitLocationModal();
          
          const dateString = await getCurrentDateString(window.defaultCity.name);
          locationTimeNode.innerHTML = dateString;
        } catch(err) {
          console.log('Error setting default city current date: ', err);
        }
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
};

export default getUserLocation;
