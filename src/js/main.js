// import getCurrentDateString from '../utils/currentDateString';
import getUserLocation from '../utils/userLocation';
import { openSearchModal, closeSearchModal } from '../utils/openSearchModal';

import WaitLocationTemplate from '../templates/waitLocationTemplate';
import SearchModalTemplate from '../templates/searchModalTemplate';


window.addEventListener('load', () => {
  const locationTimeNode = document.querySelector('.location__date');
  const waitLocationNode = document.querySelector('.wait-location');
  const searchModalNode = document.querySelector('.search-modal');
  const searchButtonNode = document.querySelector('.search-btn');

  waitLocationNode.innerHTML = WaitLocationTemplate;
  searchModalNode.innerHTML = SearchModalTemplate;

  searchButtonNode.addEventListener('click', openSearchModal);
  searchModalNode.addEventListener('click', closeSearchModal);

  getUserLocation();
  // getCurrentDateString('Medellin')
  // .then(date => locationTimeNode.innerHTML = date)
  // .catch(error => console.error('Date error: ', error));
});
