class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <picture class="hero-section__image">
          <source media="(max-width: 600px)" srcset="./image/hero-small.jpg">
          <img src='./image/hero-large.jpg' alt="hero image"></img>
      </picture>
      <div class="hero-section__text">
        <h2>Eat Well, Life Well.</h2>
        <p>restaurants all over Indonesia, are here.</p>
      </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);