// Matches Selector
//
// @see http://davidwalsh.name/essential-javascript-functions#matchesselector
//
// Check if a given node matches a given selector
//
// Example Usage:
// ```js
// matchesSelector(document.getElementById('myDiv'), 'div.someSelector[some-attribute]');
// ```
function matchesSelector(el, selector) {
  var p = Element.prototype;
  var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
    return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
  };
  return f.call(el, selector);
}
