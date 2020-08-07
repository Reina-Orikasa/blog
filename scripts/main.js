function scrollToId(id) {
  var elementPosition = document.getElementById(id).offsetTop;
  window.scrollTo(0, elementPosition - 75);
}

function hideDiv() {
  var id = document.querySelector('.hidden');
  if (id.style.display === 'none') {
    id.style.display = 'block';
  } else {
    id.style.display = 'none';
  }
}
