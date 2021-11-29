/* eslint-disable no-undef */
Feature('Uniking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');

  // menambahkan satu restaurant favorite sebelum memulai tes
  I.seeElement('.see-details');
  I.click(locate('.see-details').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.seeElement('.see-details');
  I.click(locate('.see-details').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('restaurant-item');
});