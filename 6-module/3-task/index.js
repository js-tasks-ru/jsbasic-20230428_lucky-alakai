import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides, product) {
    this.slides = slides;
    this.slideCount = this.slides.length;
    this.current = 0;
    this.product = product;
    this.elem = null;
    this.#render(product);
    this.#navigate();
  }

  #render(product) {
    const carousel = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
          <div class="carousel__slide" data-id="${this.slides[this.current].id}">
            <img src="/assets/images/carousel/${this.slides[this.current].image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${this.slides[this.current].price.toFixed(2)}</span>
              <div class="carousel__title">${this.slides[this.current].name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>
        </div>
      </div>
    `);
    const button = carousel.querySelector('.carousel__button');
    button.addEventListener('click', (event) => {
      this.#addItem(product);
      console.log(this.status);
    });

    this.elem = carousel;
  }

  #navigate() {
    const ARROW_LEFT = this.elem.querySelector('.carousel__arrow_left');
    const ARROW_RIGHT = this.elem.querySelector('.carousel__arrow_right');

    if (this.current === 0) {
      ARROW_LEFT.style.display = 'none';
    }

    if (this.current === this.slideCount - 1) {
      ARROW_RIGHT.style.display = 'none';
    }

    ARROW_LEFT.addEventListener('click', () => {
      if (this.current === 0) {
        this.current = this.slideCount - 1;
      } else {
        this.current--;
      }
      const slide = this.slides[this.current];
      const slideElem = this.elem.querySelector('.carousel__slide');
      slideElem.setAttribute('data-id', slide.id);
      slideElem.innerHTML = `
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      `;
    });

    ARROW_RIGHT.addEventListener('click', () => {
      if (this.current === this.slideCount - 1) {
        this.current = 0;
      } else {
        this.current++;
      }
      const slide = this.slides[this.current];
      const slideElem = this.elem.querySelector('.carousel__slide');
      slideElem.setAttribute('data-id', slide.id);
      slideElem.innerHTML = `
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      `;
    });
  }

  #addItem(product) {
    const event = new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
    });
    this.elem.dispatchEvent(event);
  }
}

