var $modal = document.querySelector('.modal');
var $modalButton = document.querySelector('.modal-button');
var $noButton = document.querySelector('.no-button');
var $layout = document.querySelector('.modal-layout');

function openModal(event) {
  $layout.className = 'row modal-layout position-fixed';
  $modal.className = 'modal';
}
$modalButton.addEventListener('click', openModal);

function closeModal(event) {
  $modalButton.className = 'modal-button';
  $modal.className = 'display-none';
  $layout.className = 'row modal-layout';
}
$noButton.addEventListener('click', closeModal);
