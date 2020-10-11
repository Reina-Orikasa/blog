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

const div = document.getElementById('marinersDrought');

const divsToAnim = document.querySelectorAll('.anim');

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-75px',
};

window.addEventListener('scroll', navBarFunction);

observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = 'anim1 2s forwards ease-out';
    }
  });
}, options);

divsToAnim.forEach((div) => {
  observer.observe(div);
});
