function initCarousel() {
  const LEFT_ARROW = document.querySelector('.carousel__arrow_left');
  const RIGHT_ARROW = document.querySelector('.carousel__arrow_right');
  const CAROUSEL_INNER = document.querySelector('.carousel__inner');
  const SLIDES = document.querySelectorAll('.carousel__slide');
  const SLIDE_WIDTH = document.querySelector('.carousel__inner').offsetWidth;

    let currentTranslation = 0;

    if (CAROUSEL_INNER.style.transform === '' || CAROUSEL_INNER.style.transform === 0) {
     LEFT_ARROW.style.display = 'none';
    }

   LEFT_ARROW.addEventListener('click', () => {

    currentTranslation += SLIDE_WIDTH;
    CAROUSEL_INNER.style.transform = `translateX(${currentTranslation}px)`;
    if (currentTranslation === 0) {
     LEFT_ARROW.style.display = 'none';
    }
    if (currentTranslation !== (SLIDES.length - 1) * SLIDE_WIDTH * -1) {
      RIGHT_ARROW.style.display = 'block';
    }
  });

  RIGHT_ARROW.addEventListener('click', () => {
    currentTranslation -= SLIDE_WIDTH;
    CAROUSEL_INNER.style.transform = `translateX(${currentTranslation}px)`;
    if (CAROUSEL_INNER.style.transform !== 0) {
     LEFT_ARROW.style.display = 'block';
    }
    if (currentTranslation === (SLIDES.length - 1) * SLIDE_WIDTH * -1) {
      console.log(currentTranslation);
      RIGHT_ARROW.style.display = 'none';
    }
  })

}



