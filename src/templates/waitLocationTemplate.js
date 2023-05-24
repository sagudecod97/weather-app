import '../styles/waitLocationTemplate.css';
import Location from '../assets/images/location.svg';

const WaitLocationTemplate = `
<div class="wait-location__icon">
  <img src="${Location}" alt="location">
</div>

<p class="wait-location__info">
  We use your location solely to provide personalized weather information. 
  <br>Your privacy is our priority
</p>

<div class="wait-location__spinner"></div>

<p class="wait-location__notation">
&#42; Please grant location access for accurate weather forecast;
  otherwise, a default forecast for a major city will be provided. &#42;
</p> 
`;

export default WaitLocationTemplate;
