function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelectorAll('.carousel__slide');
  
  const slideWidth = slides[0].offsetWidth;
  let currentPosition = 0;
  const maxPosition = -(slides.length - 1) * slideWidth;

  updateArrowsVisibility();

  arrowRight.addEventListener('click', () => {
    currentPosition -= slideWidth;
    carouselInner.style.transform = `translateX(${currentPosition}px)`;
    updateArrowsVisibility();
  });

  arrowLeft.addEventListener('click', () => {
    currentPosition += slideWidth;
    carouselInner.style.transform = `translateX(${currentPosition}px)`;
    updateArrowsVisibility();
  });

   function updateArrowsVisibility() {
    arrowRight.style.display = currentPosition === maxPosition ? 'none' : '';
    arrowLeft.style.display = currentPosition === 0 ? 'none' : '';
  }
}