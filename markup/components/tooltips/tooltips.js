import Tooltip from 'tooltip.js';

const tooltipElements = document.querySelectorAll('[data-tooltip]');

[...tooltipElements].forEach((element) => {
  const tooltip = new Tooltip(element, {
    title: element.getAttribute('data-title') || element.getAttribute('title'),
  });
  tooltip.hide();
});
