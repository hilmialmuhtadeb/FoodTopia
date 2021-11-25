import DicodingRestaurantSource from '../../data/dicoding-restaurant-source';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Home = {
  async render() {
    return `
    <hero-section></hero-section>
    
    <div class="content">
      <h3 class="content__heading">Restaurants</h3>
      <div id="restaurants" class="restaurants">

      </div>
    </div>
    
    <app-footer></app-footer>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantSource.listRestaurants();
    createRestaurantItemTemplate(restaurants);
  },
};

export default Home;