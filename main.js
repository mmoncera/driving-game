var carDirection = {
  currentDirection: 'east',
  ArrowRight: 'east',
  ArrowDown: 'south',
  ArrowLeft: 'west',
  ArrowUp: 'north'
};
var $car = document.querySelector('.car');

function handleDirection(event) {
  var key = event.key;
  if (key in carDirection === false) {
    return;
  }
  $car.classList.replace(carDirection.currentDirection, carDirection[key]);
  carDirection.currentDirection = carDirection[key];
}

window.addEventListener('keydown', handleDirection);

// Fix all errors
