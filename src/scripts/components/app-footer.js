class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      All Right Reserved &copy; 2021. Made By <a href="https://github.com/hilmialmuhtadeb">Hilmi Almuhtade</a>.
    `;
  }
}

customElements.define('app-footer', AppFooter);