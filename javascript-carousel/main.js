var $leftArrow = document.querySelector('.fa-angle-left');
var $rightArrow = document.querySelector('.fa-angle-right');
var $pokemonImage = document.querySelector('.pokemon-image');
var $pokemonArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $circlesRow = document.querySelector('.all-circles');
var $allCircles = document.querySelectorAll('.circle');
var $carousel = setInterval(moveRight, 3000);

function moveLeft(event) {
  var $currentImage = 0;
  for (var i = $pokemonArray.length - 1; i >= 0; i--) {
    if ($pokemonImage.getAttribute('src') === $pokemonArray[$currentImage]) {
      $pokemonImage.setAttribute('src', $pokemonArray[i]);
      $allCircles[i].className = 'fas fa-circle circle';
      $allCircles[$currentImage].className = 'far fa-circle circle';
      resetInterval();
      return;
    } else if ($pokemonImage.getAttribute('src') === $pokemonArray[i]) {
      $pokemonImage.setAttribute('src', $pokemonArray[i - 1]);
      $allCircles[i - 1].className = 'fas fa-circle circle';
      $allCircles[i].className = 'far fa-circle circle';
      resetInterval();
      return;
    }
  }
}
$leftArrow.addEventListener('click', moveLeft);

function moveRight(event) {
  var $currentImage = 4;
  for (var i = 0; i < $pokemonArray.length; i++) {
    if ($pokemonImage.getAttribute('src') === $pokemonArray[$currentImage]) {
      $pokemonImage.setAttribute('src', $pokemonArray[i]);
      $allCircles[i].className = 'fas fa-circle circle';
      $allCircles[$currentImage].className = 'far fa-circle circle';
      resetInterval();
      return;
    } else if ($pokemonImage.getAttribute('src') === $pokemonArray[i]) {
      $pokemonImage.setAttribute('src', $pokemonArray[i + 1]);
      $allCircles[i + 1].className = 'fas fa-circle circle';
      $allCircles[i].className = 'far fa-circle circle';
      resetInterval();
      return;
    }
  }
}
$rightArrow.addEventListener('click', moveRight);

function switchCircles(event) {
  for (var i = 0; i < $allCircles.length; i++) {
    if (event.target === $allCircles[i]) {
      $allCircles[i].className = 'fas fa-circle circle';
      $pokemonImage.setAttribute('src', $pokemonArray[i]);
    } else {
      $allCircles[i].className = 'far fa-circle circle';
    }
  }
  resetInterval();
}
$circlesRow.addEventListener('click', switchCircles);

function resetInterval() {
  clearInterval($carousel);
  $carousel = setInterval(moveRight, 3000);
}
