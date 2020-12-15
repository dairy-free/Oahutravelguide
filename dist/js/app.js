// Nav Overlay 

const navBtn = document.getElementsByClassName('toggle-nav')[0]
const closeBtn = document.getElementsByClassName('close-btn')[0]
const overlayScroll = document.getElementsByTagName('BODY')[0];


closeBtn.addEventListener('click', toggleNav);
navBtn.addEventListener('click', toggleNav);

function toggleNav() {
  const toggleOverlay = document.getElementsByClassName('nav-overlay')[0]
  toggleOverlay.classList.toggle('show-nav')
  overlayScroll.classList.toggle('hide-scroll')
}


// Scroll effect on overlay
const checkpoint = 300;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } 
  document.querySelector(".h1-cover-overlay").style.opacity = opacity;
});

