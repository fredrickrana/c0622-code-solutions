var $h1 = document.querySelector('.countdown-display');
var $timer = 4;
var $beginCountdown = setInterval(countdown, 2000);

function countdown() {
  $timer--;
  $h1.textContent = $timer;
  if ($timer < 1) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval($beginCountdown);
  }
}
