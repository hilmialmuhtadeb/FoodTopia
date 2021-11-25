import CONFIG from '../../global/config';
import '../../components/review-bar';
import '../../components/restaurant-item';

const createReviewCardItem = (review) => `
  <div class="review-card">
    <h6>${review.name}</h6>
    <small>${review.date}</small>
    <p><q>${review.review}</q></p>
  </div>
`;

const createCustomerReviewCardsTemplate = (reviews) => {
  let customerReviewCards = '';

  if (reviews.length > 2) {
    for (let i = 0; i < 3; i++) {
      customerReviewCards += createReviewCardItem(reviews[i]);
    }
  } else {
    reviews.forEach((review) => {
      customerReviewCards += createReviewCardItem(review);
    });
  }

  return customerReviewCards;
};

const listMenuMaker = (menus) => {
  let listMenu = '';

  menus.forEach((menu) => {
    listMenu += `<li>${menu.name}</li>`;
  });

  return listMenu;
};

const createRestaurantItemTemplate = (restaurants) => {
  restaurants.forEach((restaurant) => {
    const restaurantsContainer = document.querySelector('#restaurants');
    const restaurantItem = document.createElement('restaurant-item');
    restaurantItem.restaurant = restaurant;
    restaurantsContainer.appendChild(restaurantItem);
  });
};

const createDetailRestaurantTemplate = (restaurant) => `
  <img src="${CONFIG.BASE_LARGE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-detail__image">
  <h2 class="restaurant-detail__name">${restaurant.name}</h2>
  <h3 class="restaurant-detail__city">${restaurant.city}</h3>
  <p class="restaurant-detail__address">${restaurant.address}</p>
  <p class="restaurant-detail__description">${restaurant.description}</p>
  <div class="restaurant-detail__menus">
    <div class="foods-menu">
      <h4>Menu Makanan:</h4>
      <ul>${listMenuMaker(restaurant.menus.foods)}</ul>
    </div>
    <div class="drinks-menu">
      <h4>Menu Minuman:</h4>
      <ul>${listMenuMaker(restaurant.menus.drinks)}</ul>
    </div>
  </div>
  <div class="restaurant-detail__reviews">
    <h5>what customers say?</h5>
    <div class="restaurant-detail__reviews-container">
      ${createCustomerReviewCardsTemplate(restaurant.customerReviews)}
    </div>
  </div>
  <div class="restaurant-detail__add-review">
    <h5>Write a review</h5>
    <review-bar></review-bar>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="add this restaurant to favorite" id="favoriteButton" class="favorite">
     <i class="fa fa-star-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="remove this restaurant from the favorite" id="favoriteButton" class="favorite">
    <i class="fa fa-star" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createDetailRestaurantTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};