import 'babel-polyfill';
import WOW from 'wowjs';

import '../../components/questions-slider/questions-slider';

import '../../components/popup/popup';
import '../../components/tooltips/tooltips';

import '../../components/investment-options/investment-options';

document.addEventListener('DOMContentLoaded', () => {
  window.wow = new WOW.WOW({
    offset: 50,
    live: true,
  });
  wow.init();
  [
    Accordion,
    Information,
  ].map(component => component.init());
});
