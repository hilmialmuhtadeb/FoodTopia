const SendReviewHelper = {
  async sendReview(event, id) {
    event.preventDefault();

    const reviewData = {
      id,
      name: document.querySelector('#name').value,
      review: document.querySelector('#review').value,
    };

    const response = await this._postReview('https://restaurant-api.dicoding.dev/review', reviewData);

    if (response.status === 201) {
      location.reload();
      alert('Your review has been successfully added');
    } else {
      alert('Your review failed to add');
    }
  },

  async _postReview(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  },
};

export default SendReviewHelper;