const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children)
const nextBtn = document.querySelector('.carousel-right');
const prevBtn = document.querySelector('.carousel-left');
const dotNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
  if(targetIndex === 0) {
    prevBtn.classList.add('is-hidden');
    nextBtn.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevBtn.classList.remove('is-hidden')
    nextBtn.classList.add('is-hidden');
  } else {
    prevBtn.classList.remove('is-hidden')
    nextBtn.classList.remove('is-hidden')
  }
}

// Click left, slides move left
prevBtn.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide')
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotNav.querySelector('.current-slide')
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide)


  moveToSlide(track,currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows (slides, prevBtn, nextBtn, prevIndex);

})

// Click right, slides move right
nextBtn.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotNav.querySelector('.current-slide')
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide)

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows (slides, prevBtn, nextBtn, nextIndex);

})

// click nav indicator, move to selected slide

dotNav.addEventListener('click', e => {
  // What Indicator was clicked on?
  const targetDot = e.target.closest('button');

  if(!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotNav.querySelector('.current-slide')
  const targetIndex = dots.findIndex(dot => dot === targetDot)
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows (slides, prevBtn, nextBtn, targetIndex);
  
})