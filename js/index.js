const slider = document.getElementById('sliderId');
const images = slider.querySelectorAll('img');
 
let index = 0;
images[index].classList.add('active');
const intervalTime = 2000;
 
function nextImage() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}
 
setInterval(nextImage, intervalTime);