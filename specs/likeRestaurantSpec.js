/* eslint-disable no-undef */
import favoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';

describe('Favoriting a Restaurant', () => {
  it('Should show the like button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    await favoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="add this restaurant to favorite"]'))
      .toBeTruthy();
  });

  it('Should not show the unlike button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    await favoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="remove this restaurant from the favorite"]'))
      .toBeFalsy();
  });
});