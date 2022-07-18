function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
}
function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
}
function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.value:', event.target.value);
}

var $name = document.querySelector('input');
var $email = document.querySelector('input[name="email"]');
var $message = document.querySelector('textarea');

$name.addEventListener('focus', handleFocus);
$email.addEventListener('focus', handleFocus);
$message.addEventListener('focus', handleFocus);

$name.addEventListener('blur', handleBlur);
$email.addEventListener('blur', handleBlur);
$message.addEventListener('blur', handleBlur);

$name.addEventListener('input', handleInput);
$email.addEventListener('input', handleInput);
$message.addEventListener('input', handleInput);
