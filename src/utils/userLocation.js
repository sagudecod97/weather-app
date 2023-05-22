import getUserCityName from "./userCityName";

const getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        getUserCityName(latitude, longitude);

        window.userLatitude = latitude;
        window.userLongitude = longitude;
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
};

export default getUserLocation;
