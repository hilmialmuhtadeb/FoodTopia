import CONFIG from '../global/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img class="lazyload restaurant-item__image" data-src="${CONFIG.BASE_MEDIUM_IMAGE_URL}${this._restaurant.pictureId}" alt="${this._restaurant.name}">
      <div class="restaurant-item__body">
          <div class="restaurant-item__info">
              <h4>${this._restaurant.name}</h4>
              <p>${this._restaurant.city}</p>
          </div>
          <p class="restaurant-item__description">${this._restaurant.description}</p>
          <a href="/#/detail/${this._restaurant.id}" class="see-details">See details..</a>
          <p class="restaurant-item__rating">★ <span class="number">${this._restaurant.rating}</span></p>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);