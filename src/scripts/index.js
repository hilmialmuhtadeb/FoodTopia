import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
// import swRegister from './utils/sw-register';

const app = new App({
  hamburger: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('.app-bar__navigation'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});