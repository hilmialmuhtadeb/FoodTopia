/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Favorite Restaurants', '.content__heading');
  I.dontSeeElement('restaurant-item');

  I.amOnPage('/');

  I.seeElement('.see-details');
  const firstRestaurantTitle = await I.grabTextFrom(locate('.restaurant-item__info h4').first());
  I.click(locate('.see-details').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__info h4');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});