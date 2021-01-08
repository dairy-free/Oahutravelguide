// Img Gallery

var element = document.getElementById('mySwipe');
 prevBtn = document.getElementById('prev'),
 nextBtn = document.getElementById('next');

 

 window.mySwipe = new Swipe(element, {
  startSlide: 0,
  speed: 400,
  auto: 3000,
  draggable: true,
  continuous: false,
  autoRestart: false,
  disableScroll: false, // prevent touch events from scrolling the page
  stopPropagation: false, 
  callback: function(index, elem, dir) {},
  transitionEnd: function(index, elem) {}
});


nextBtn.addEventListener('click', mySwipe.next)
prevBtn.addEventListener('click', mySwipe.prev)




// End Img Gallery