var $car = document.querySelector('.car');
var carInfo = {
  currentDirection: 'east',
  directions: {
    ArrowRight: 'east',
    ArrowDown: 'south',
    ArrowLeft: 'west',
    ArrowUp: 'north'
  },
  coordinates: {
    x: $car.getBoundingClientRect().left,
    y: $car.getBoundingClientRect().top
  },
  isStarted: false
};
var intervalId;

function startCar() {
  carInfo.coordinates.x += 10;
  $car.style.left = carInfo.coordinates.x + 'px';
}

function stopCar() {
  clearInterval(intervalId);
  carInfo.isStarted = false;
}

function handleTurn(event) {
  var key = event.key;
  if (carInfo.isStarted) {
    return;
  }
  $car.classList.replace(carInfo.currentDirection, carInfo.directions[key]);
  carInfo.currentDirection = carInfo.directions[key];
}

function handleMovement(event) {
  var key = event.key;
  if (key === ' ') {
    if (!carInfo.isStarted) {
      intervalId = setInterval(startCar, 16);
      carInfo.isStarted = true;
      return;
    }
    stopCar();
  }
}

window.addEventListener('keydown', handleTurn);
window.addEventListener('keydown', handleMovement);
