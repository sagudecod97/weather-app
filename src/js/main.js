// import getCurrentDateString from '../utils/currentDateString';
import getUserLocation from '../utils/userLocation';


window.addEventListener('load', () => {
  const locationTimeNode = document.querySelector('.location__date');

  getUserLocation();
  // getCurrentDateString('Medellin')
  // .then(date => locationTimeNode.innerHTML = date)
  // .catch(error => console.error('Date error: ', error));
});
