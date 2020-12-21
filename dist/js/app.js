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

// End Scroll effect on overlay

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

// Helper function from: http://stackoverflow.com/a/7557433/274826
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