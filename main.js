var $car = document.querySelector('.car');
var carDirection = {
  currentDirection: 'east',
  ArrowRight: 'east',
  ArrowDown: 'south',
  ArrowLeft: 'west',
  ArrowUp: 'north',
  x: $car.getBoundingClientRect().left,
  y: $car.getBoundingClientRect().top
};

function startCar() {
  carDirection.x += 10;
  $car.style.left = carDirection.x + 'px';
}

function handleTurn(event) {
  var key = event.key;
  if (key in carDirection === false) {
    return;
  }
  $car.classList.replace(carDirection.currentDirection, carDirection[key]);
  carDirection.currentDirection = carDirection[key];
}

function handleMovement(event) {
  var key = event.key;
  if (key === ' ') {
    setInterval(startCar, 16);
  }
}

window.addEventListener('keydown', handleTurn);
window.addEventListener('keydown', handleMovement);

// Fix errors
