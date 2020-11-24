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
