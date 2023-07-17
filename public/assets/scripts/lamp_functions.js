// HTML img element
const lamp = document.querySelector('.lamp__img');

// IMG Sources
const lampOnImg = '/public/assets/images/light-on.svg';
const lampOffImg = '/public/assets/images/light-off.svg';
const lampBrokenImg = '/public/assets/images/light-broken.svg';

// Buttons
const buttonOn = document.querySelector('.button__on');
const buttonOff = document.querySelector('.button__off');
const buttonOnOff = document.querySelector('.button__on-off')

// Event Listeners
buttonOn.addEventListener('click', turnLampOn);
buttonOff.addEventListener('click', turnLampOff);
buttonOnOff.addEventListener('click', turnLampOnOff)
lamp.addEventListener('mouseover', turnLampOn);
lamp.addEventListener('mouseleave', turnLampOff);
lamp.addEventListener('dblclick', brokeLamp);

function turnLampOn() {
  if (!isLampBroken()) {
    lamp.src = lampOnImg;
  }
}

function turnLampOff() {
  if (!isLampBroken()) {
    lamp.src = lampOffImg;
  }
}

function brokeLamp() {
  lamp.src = lampBrokenImg;
}

function isLampBroken() {
  return lamp.src.includes('broken');
}

function isLampOn() {
  return lamp.src.includes('on');
}


function turnLampOnOff() {
 if (!isLampOn()) {
    turnLampOn();

  } else {
    turnLampOff();
  }
}
