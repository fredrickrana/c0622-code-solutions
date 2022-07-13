var $allCharacters = document.querySelectorAll('span');
var $character = 0;

function typingTutor(event) {
  if ($allCharacters[$character].textContent === event.key) {
    $allCharacters[$character].className = 'color-green';
    $allCharacters[$character + 1].className = 'border-bottom';
    $character++;
  } else if ($allCharacters[$character].textContent !== event.key) {
    $allCharacters[$character].className = 'color-red';
  }
}
document.addEventListener('keydown', typingTutor);
