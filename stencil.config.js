exports.config = {
  bundles: [
    { components: ['my-app', 'app-home'] },
    { components: ['nyt-card-list', 'nyt-card'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
