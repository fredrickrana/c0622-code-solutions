var totalClicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function totalAmountClicks(event) {
  totalClicks++;
  $clickCount.textContent = 'Clicks: ' + totalClicks;
  if (totalClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (totalClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (totalClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (totalClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (totalClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', totalAmountClicks);
