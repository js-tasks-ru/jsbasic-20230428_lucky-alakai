let product = {
    name: "Laab kai chicken salad",
    price: 10,
    category: "salads",
    image: "laab_kai_chicken_salad.png",
    id: "laab-kai-chicken-salad"
}

export default class ProductCard {

  elem = null;

  constructor(product) {
    this.elem = this.#render(product);
  }

  #render(product) {
    const element = document.createElement('div');
    const cardTop = document.createElement('div');
    const cardBody = document.createElement('div');
    element.classList.add('card');
    cardTop.classList.add('card__top');
    cardBody.classList.add('card__body');
    element.appendChild(cardTop);
    element.appendChild(cardBody);

    const cardImage = document.createElement('img');
    cardImage.src = `/assets/images/products/${product.image}`;
    cardImage.setAttribute('alt', 'product');
    cardImage.classList.add('card__image');
    const cardPrice = document.createElement('span');
    cardPrice.classList.add('card__price');
    cardPrice.textContent = `€${product.price.toFixed(2)}`;
    cardTop.appendChild(cardImage);
    cardTop.appendChild(cardPrice);

    const cardTitle = document.createElement('div');
    const button = document.createElement('button');
    const plusIcon = document.createElement('img');
    cardTitle.textContent = `${product.name}`;
    cardTitle.classList.add('card__title');
    button.classList.add('card__button');
    plusIcon.src = "/assets/images/icons/plus-icon.svg";
    plusIcon.setAttribute('alt', 'icon');

    button.appendChild(plusIcon);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(button);

    button.addEventListener('click', (event) => {
      this.#addItem(button, product);
    });

    return element;
  }

  #addItem(button, product) {
    const event = new CustomEvent("product-add", {
      detail: product.id,
      bubbles: true
    });
    this.elem.dispatchEvent(event);
  }

}

let prod = new ProductCard(product);
console.log(prod.elem);
