// Nav Overlay 

const navBtn = document.getElementsByClassName('toggle-nav')[0]
const closeBtn = document.getElementsByClassName('close-btn')[0]

closeBtn.addEventListener('click', toggleNav);
navBtn.addEventListener('click', toggleNav);

function toggleNav() {
  const toggleOverlay = document.getElementsByClassName('nav-overlay')[0]
  toggleOverlay.classList.toggle('show-nav')
}



