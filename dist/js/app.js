// Nav Overlay 

const navBtn = document.getElementsByClassName('toggle-nav')[0]
const closeBtn = document.getElementsByClassName('close-btn')[0]
const overlayScroll = document.getElementsByTagName('BODY')[0];
const navbarContainer = document.getElementsByClassName('navbar-container')[0]




closeBtn.addEventListener('click', toggleNav);
navBtn.addEventListener('click', toggleNav);

function toggleNav() {
  navbarContainer.classList.toggle('show-nav')
  overlayScroll.classList.toggle('hide-scroll')
}


// Images animations
// Detect request animation frame

let scroll = window.requestAnimationFrame ||

// IE Fallback

function(callback){ window.setTimeout(callback, 1000/60)};
let elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// Read more BTN on Planning Page
const dotPara = document.getElementById('dots');
const moreText = document.getElementById('more')
const showBtn = document.getElementById('readBtn')

showBtn.addEventListener('click', showMore)

function showMore() {
  if (dotPara.style.display === 'none') {
    dotPara.style.display = "inline";
    showBtn.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dotPara.style.display = "none";
    showBtn.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
