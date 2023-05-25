import '../styles/searchModalTemplate.css';

import Search from '../assets/images/search.svg';
import Close from '../assets/images/circle-xmark.svg';

const SearchModalTemplate = `
<div class="modal">
  <div class="icons">
    <div class="icons__icon icons__icon--search">
      <img src="${Search}" alt="location">
    </div>

    <div class="icons__icon icons__icon--close">
      <img src="${Close}" alt="location">
    </div>
  </div>

  <p class="modal__search">
    Stay in the know with any city's weather
  </p>

  <form class="search">
    <input class="search__input" type="text" placeholder="City's name"/>
    <button type="submit" class="search__button">
      Search
    </button>
  </form>
</div>
`;

export default SearchModalTemplate;
