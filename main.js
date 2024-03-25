import './style.css'
import {
  VITE_CITY_STATE_ZIP,
  VITE_EMAIL,
  VITE_PHONE,
  VITE_STREET_ADDRESS,
} from './constants'
import { init } from './skill';

const placeholderMap = {
  phone: VITE_PHONE,
  email: VITE_EMAIL,
  address: VITE_STREET_ADDRESS,
  'city-state-zip': VITE_CITY_STATE_ZIP,
};

let newMarkup = document.body.innerHTML;
Object.entries(placeholderMap).forEach(([placeholder, value]) => {
  newMarkup = newMarkup.replace(`{${placeholder}}`, value);
});

document.body.innerHTML = newMarkup;

init();
