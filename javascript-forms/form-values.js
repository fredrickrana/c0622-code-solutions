var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var messageData = {
    name: $form.name.value,
    email: $form.email.value,
    message: $form.message.value
  };
  console.log(messageData);
  $form.reset();
});
