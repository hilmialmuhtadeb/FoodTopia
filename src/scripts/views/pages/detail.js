import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import UrlParser from '../../routes/url-parser';
import favoriteButtonInitiator from '../../utils/favorite-button-initiator';
import SendReviewHelper from '../../utils/send-review-helper';
import { createDetailRestaurantTemplate } from '../template/template-creator';

const Detail = {
  async render() {
    return `
      <div class="restaurant"></div>
      <div id="favoriteButtonContainer"></div>
      <app-footer></app-footer>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.restaurant');
    restaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurant);

    const sendReviewButton = document.querySelector('#sendReviewButton');
    sendReviewButton.addEventListener('click', (event) => {
      SendReviewHelper.sendReview(event, restaurant.id);
    });

    favoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;