function scrollToId(id) {
  const elementPosition = document.getElementById(id).offsetTop;
  window.scrollTo(0, elementPosition - 75);
}

function hideDiv() {
  let id = document.querySelector('.hidden');
  if (id.style.display === 'block') {
    id.style.display = 'none';
  } else {
    id.style.display = 'block';
  }
}

const navBar = document.getElementById('main-nav');
const navLocation = navBar.offsetTop;

function navBarFunction() {
  if (window.pageYOffset > navLocation) {
    navBar.style.transition = '1s ease-in';
    navBar.style.background = '#444';
  } else {
    navBar.style.transition = '1s ease-in';
    navBar.style.background = 'none';
  }
}
