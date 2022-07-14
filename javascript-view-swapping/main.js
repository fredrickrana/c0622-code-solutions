var $container = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$container.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
    var attributeValue = event.target.getAttribute('data-view');
    for (var x = 0; x < $view.length; x++) {
      if ($view[x].getAttribute('data-view') !== attributeValue) {
        $view[x].className = 'hidden';
      } else {
        $view[x].className = 'view';
      }
    }
  }
});
