// Get Absolute Url
//
// @see http://davidwalsh.name/essential-javascript-functions#getabsoluteurl
//
// Get the absolute url for the current page.
//
// Example Usage:
// ```js
// getAbsoluteUrl('/something'); // http://davidwalsh.name/something
// ```
var getAbsoluteUrl = (function() {
  var a;

  return function(url) {
    if(!a) a = document.createElement('a');
    a.href = url;

    return a.href;
  };
})();
