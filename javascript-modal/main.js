var $modal = document.querySelector('.modal');
var $modalButton = document.querySelector('.modal-button');
var $noButton = document.querySelector('.no-button');
var $container = document.querySelector('.container');

function openModal(event) {
  $modalButton.className = 'modal-button brightness-20';
  $modal.className = 'modal';
  $container.className = 'container background-dark';
}
$modalButton.addEventListener('click', openModal);

function closeModal(event) {
  $modalButton.className = 'modal-button';
  $modal.className = 'display-none';
  $container.className = 'container';
}
$noButton.addEventListener('click', closeModal);
