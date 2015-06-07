Package.describe({
  name: 'mantarayar:essentials',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('../src/debounce.js');
  api.addFiles('../src/get-absolute-url.js');
  api.addFiles('../src/insert-rule.js');
  api.addFiles('../src/is-native.js');
  api.addFiles('../src/matches-selector.js');
  api.addFiles('../src/once.js');
  api.addFiles('../src/poll.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mantarayar:essentials');
  api.addFiles('../tests/essentials-tests.js');
});
