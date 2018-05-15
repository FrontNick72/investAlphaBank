import Tabs from '../tabs/tabs';
import { debug } from 'util';

const tabsElement = document.querySelector('.investment-options');

if (tabsElement) {
  const tabs = new Tabs('investment-options', tabsElement);
  tabs.init();

  [...document.querySelectorAll('.investment-options__step')].forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      const currentStep = event.target;
      const step = currentStep.getAttribute('data-step');

      setButtonStep(step);


    });
  });

  document.querySelector('.mobile-block__play-button').addEventListener('click', (event) => {
    event.preventDefault();
    const currentButton = event.currentTarget;
    const wrapper = currentButton.closest('.investment-options');
    const stepsButtonWrapper = wrapper.querySelector('.investment-options__steps');
    stepUp();
  });

}

function setButtonStep(step) {
  if ( step > 4 ) {
    step = 1
  }

  const contentSteps = document.querySelectorAll('.investment-options__content');
  const mobileSteps = document.querySelectorAll('.mobile-block__photo');
  const allContent = document.querySelectorAll(`[data-content-step='${step}']`);

  [...document.querySelector('.investment-options__steps').children].forEach((element) => {
    element.classList.remove('investment-options__step_active');
  });

  for (let i = 1; i <= step; i++) {
    document.querySelector(`[data-step='${i}'`).classList.add('investment-options__step_active');
  }

  [...contentSteps].forEach((element) => {
    element.classList.remove('investment-options__content_active');
  });

  [...mobileSteps].forEach((element) => {
    element.classList.remove('mobile-block__photo_active');
  });

  [...allContent].forEach((element) => {

    if (element.classList.contains('investment-options__content')) {
      element.classList.add('investment-options__content_active');
    }else {
      element.classList.add('mobile-block__photo_active');
    }

  });
}

function stepUp() {
  const currentStep = document.querySelector('.investment-options__content_active').getAttribute('data-content-step');
  const nextStep = parseInt(currentStep) + 1;

  setButtonStep(nextStep);
}
