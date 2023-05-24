// import getCurrentDateString from '../utils/currentDateString';
import getUserLocation from '../utils/userLocation';

import WaitLocationTemplate from '../templates/waitLocationTemplate';


window.addEventListener('load', () => {
  const locationTimeNode = document.querySelector('.location__date');
  const waitLocationNode = document.querySelector('.wait-location');

  waitLocationNode.innerHTML = WaitLocationTemplate;

  getUserLocation();
  // getCurrentDateString('Medellin')
  // .then(date => locationTimeNode.innerHTML = date)
  // .catch(error => console.error('Date error: ', error));
});
