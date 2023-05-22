import getCurrentDateString from '../utils/currentDateString';

window.addEventListener('load', () => {
  const locationTimeNode = document.querySelector('.location__date');

  getCurrentDateString('Medellin')
  .then(date => locationTimeNode.innerHTML = date)
  .catch(error => console.error('Date error: ', error));
});
