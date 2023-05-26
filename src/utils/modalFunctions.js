import normalizeString from "./normalizeString";
import getUserInputCity from "./userInputCity";

const openSearchModal = () => {
  const searchModalNode = document.querySelector('.search-modal');

  searchModalNode.classList.remove('search-modal--hide');
  searchModalNode.classList.add('search-modal--show');
};

const closeSearchModal = () => {
  const searchModalNode = document.querySelector('.search-modal');

  searchModalNode.classList.remove('search-modal--show');
  searchModalNode.classList.add('search-modal--hide');
};

const modalEvents = (event) => {
  const searchInputNode = document.querySelector('.search__input');
  const { classList } = event.srcElement;
  const classListArray = [...classList];

 if (classListArray.includes('search-modal') ||
    classListArray.includes('icons__icon--close')
 ) {
  closeSearchModal();
 }

 if (classListArray.includes('search__button')) {
  event.preventDefault();

  let userInput = searchInputNode.value.toLowerCase();
  userInput = normalizeString(userInput);

  getUserInputCity(userInput);
  closeSearchModal();
 }
};

export {
  openSearchModal,
  modalEvents,
};
