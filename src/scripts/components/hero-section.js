class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>Eat Well, Life Well.</h2>
      <p>restaurants all over Indonesia, are here.</p>
    `;
  }
}

customElements.define('hero-section', HeroSection);