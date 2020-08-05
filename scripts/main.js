function scrollToId(id) {
  var elementPosition = document.getElementById(id).offsetTop;
  window.scrollTo(0, elementPosition - 75);
}
