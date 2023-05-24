import getUserCityName from "./userCityName";
import getCurrentWeather from "./currentWeather";

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

          // getCurrentWeather(latitude, longitude, userCityName);

          window.userLatitude = latitude;
          window.userLongitude = longitude;

          closeWaitLocationModal();
        } catch(err) {
          console.log('Error while waiting for city name');
        }
      },
      (error) => {
        console.error('Error getting geolocation:', error);
        // getCurrentWeather();
        closeWaitLocationModal();
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
};

export default getUserLocation;
