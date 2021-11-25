import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
      <hero-section></hero-section>

      <div class="content">
        <h3 class="content__heading">Favorite Restaurants</h3>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
      
      <app-footer></app-footer>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    createRestaurantItemTemplate(restaurants);
  },
};

export default Favorite;