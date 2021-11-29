import favoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const favoriteButtonConstructor = async ({ id }) => {
  await favoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    restaurant: {
      id,
    },
  });
};

export default favoriteButtonConstructor;