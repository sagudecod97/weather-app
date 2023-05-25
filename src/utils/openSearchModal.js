const openSearchModal = () => {
  const searchModalNode = document.querySelector('.search-modal');

  searchModalNode.classList.remove('search-modal--hide');
  searchModalNode.classList.add('search-modal--show');
};

const closeSearchModal = (event) => {
  const searchModalNode = document.querySelector('.search-modal');
  const { classList } = event.srcElement;
  const classListArray = [...classList];

 if (classListArray.includes('search-modal') ||
    classListArray.includes('icons__icon--close')
 ) {
  searchModalNode.classList.remove('search-modal--show');
  searchModalNode.classList.add('search-modal--hide');
 }

 if (classListArray.includes('search__button')) {
  event.preventDefault();
 }

};

export {
  openSearchModal,
  closeSearchModal,
};
