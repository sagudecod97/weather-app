import getUserCityName from "./userCityName";

const getUserLocation = () => {
  const waitLocationModal = document.querySelector('.wait-location');

  const closeWaitLocationModal = () => {
    waitLocationModal.classList.remove('wait-location--active');
    waitLocationModal.classList.add('wait-location--hide');
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        getUserCityName(latitude, longitude);

        window.userLatitude = latitude;
        window.userLongitude = longitude;

        closeWaitLocationModal();
      },
      (error) => {
        console.error('Error getting geolocation:', error);
        closeWaitLocationModal();
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
};

export default getUserLocation;
