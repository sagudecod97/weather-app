import getUserLocation from '../utils/userLocation';
import { openSearchModal, modalEvents } from '../utils/modalFunctions';

import WaitLocationTemplate from '../templates/waitLocationTemplate';
import SearchModalTemplate from '../templates/searchModalTemplate';


window.addEventListener('load', () => {
  const waitLocationNode = document.querySelector('.wait-location');
  const searchModalNode = document.querySelector('.search-modal');
  const searchButtonNode = document.querySelector('.search-btn');

  waitLocationNode.innerHTML = WaitLocationTemplate;
  searchModalNode.innerHTML = SearchModalTemplate;

  searchButtonNode.addEventListener('click', openSearchModal);
  searchModalNode.addEventListener('click', modalEvents);

  getUserLocation();
});
