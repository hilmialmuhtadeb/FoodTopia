const DrawerInitiator = {
  init({ hamburger, drawer, content }) {
    hamburger.addEventListener('click', (event) => {
      this._showDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _showDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('show');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('show');
  },
};

export default DrawerInitiator;