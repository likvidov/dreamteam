window.onload = function () {
  var main = document.querySelector('main');
  var preloader = document.querySelector('.preloader');
  this.setTimeout(() => {
    preloader.remove();
    main.classList = '';
  }, 1500);
}