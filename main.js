var intervalId;
var $car = document.querySelector('.car');
var carInfo = {
  isStarted: false,
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
  }
};

function turnCar(key) {
  if (key in carInfo.directions) {
    $car.classList.replace(carInfo.currentDirection, carInfo.directions[key]);
    carInfo.currentDirection = carInfo.directions[key];
  }
}

function startStopCar(key) {
  if (key === ' ') {
    if (!carInfo.isStarted) {
      intervalId = setInterval(moveCar, 16);
      carInfo.isStarted = true;
    } else {
      clearInterval(intervalId);
      carInfo.isStarted = false;
    }
  }
}

function moveCar() {
  if (carInfo.currentDirection === 'east') {
    carInfo.coordinates.x += 10;
    $car.style.left = carInfo.coordinates.x + 'px';
  } else if (carInfo.currentDirection === 'south') {
    carInfo.coordinates.y += 10;
    $car.style.top = carInfo.coordinates.y + 'px';
  } else if (carInfo.currentDirection === 'west') {
    carInfo.coordinates.x -= 10;
    $car.style.left = carInfo.coordinates.x + 'px';
  } else if (carInfo.currentDirection === 'north') {
    carInfo.coordinates.y -= 10;
    $car.style.top = carInfo.coordinates.y + 'px';
  }
}

function handleCar({ key }) {
  turnCar(key);
  startStopCar(key);
}

window.addEventListener('keydown', handleCar);
