/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import favoriteButtonConstructor from './helpers/favoriteButtonConstructor';

describe('Unfavoriting a Restaurant', () => {
  beforeEach(async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('Should display unlike button when the restaurant has been liked', async () => {
    await favoriteButtonConstructor({ id: 1 });

    expect(document.querySelector('[aria-label="remove this restaurant from the favorite"]'))
      .toBeTruthy();
  });

  it('Should not display like button when the restaurant has been liked', async () => {
    await favoriteButtonConstructor({ id: 1 });

    expect(document.querySelector('[aria-label="add this restaurant to favorite"]'))
      .toBeFalsy();
  });

  it('Should be able to remove liked restaurant from the list', async () => {
    await favoriteButtonConstructor({ id: 1 });

    document.querySelector('[aria-label="remove this restaurant from the favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('Should not throw error if the unliked restaurant is not in the list', async () => {
    await favoriteButtonConstructor({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="remove this restaurant from the favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});