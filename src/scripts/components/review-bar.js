class ReviewBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <form action="https://restaurant-api.dicoding.dev/review" method="post">
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
        <label for="review">Review</label>
        <textarea name="review" id="review" cols="30" rows="3"></textarea>
        <button type="submit" id="sendReviewButton">Send</button>
      </form>
    `;
  }
}

customElements.define('review-bar', ReviewBar);