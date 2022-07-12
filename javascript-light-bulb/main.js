var $circle = document.querySelector('.circle');
var $container = document.querySelector('.background-dark');
var $light = true;

function lightBulb(event) {
  if ($light === true) {
    $circle.className = 'circle color-yellow';
    $container.className = 'container background-yellow';
    $light = false;
  } else if ($light === false) {
    $circle.className = 'circle color-black';
    $container.className = 'container background-dark';
    $light = true;
  }
}

$circle.addEventListener('click', lightBulb);
