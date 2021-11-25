const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlSplits = url.split('/');
    return {
      resource: urlSplits[1] || null,
      id: urlSplits[2] || null,
      verbs: urlSplits[3] || null,
    };
  },

  _urlCombiner(splittedUrl) {
    return (splittedUrl.resource ? `/${splittedUrl.resource}` : '/')
    + (splittedUrl.id ? '/:id' : '')
    + (splittedUrl.verbs ? `${splittedUrl.verbs}` : '');
  },
};

export default UrlParser;