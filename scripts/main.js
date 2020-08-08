function scrollToId(id) {
  var elementPosition = document.getElementById(id).offsetTop;
  window.scrollTo(0, elementPosition - 75);
}

function hideDiv() {
  var id = document.querySelector('.hidden');
  if (id.style.display === 'block') {
    id.style.display = 'none';
  } else {
    id.style.display = 'block';
  }
}
