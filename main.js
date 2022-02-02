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

function handleTurn(event) {
  var key = event.key;
  if (key in carDirection === false) {
    return;
  }
  $car.classList.replace(carDirection.currentDirection, carDirection[key]);
  carDirection.currentDirection = carDirection[key];
}

window.addEventListener('keydown', handleTurn);
