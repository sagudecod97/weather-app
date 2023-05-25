import RainUmbrella from '../assets/images/umbrella.svg';
import ClearSky from '../assets/images/cloud.svg';
import RainDrizzle from '../assets/images/cloud-rain.svg';
import ThunderStorm from '../assets/images/thunderstorm.svg';
import Snow from '../assets/images/snowflakes.svg';
import Mist from '../assets/images/smog.svg';
import Smoke from '../assets/images/smoke.svg';
import Haze from '../assets/images/haze.svg';
import Fog from '../assets/images/fog.svg';
import Tornado from '../assets/images/tornado.svg';
import Unavailable from '../assets/images/ban.svg';

const getIconWeather = (weatherStatus) => {
  const iconNameLowerCase = weatherStatus.toLowerCase();
  const iconName = {
    'clear': ClearSky,
    'clouds': ClearSky,
    'drizzle': RainDrizzle,
    'rain': RainUmbrella,
    'thunderstorm': ThunderStorm,
    'snow': Snow,
    'mist': Mist,
    'smoke': Smoke,
    'haze': Haze,
    'fog': Fog,
    'tornado': Tornado,
  }

  if (!iconName[iconNameLowerCase])
    return Unavailable;

  return iconName[iconNameLowerCase];
};

export default getIconWeather;
