// Insert Rule
//
// @see http://davidwalsh.name/essential-javascript-functions#insertrule
//
// Set a style to a selector
//
// Example Usage:
// ```js
// sheet.insertRule("header { float: left; opacity: 0.8; }", 1);
// ```
sheet = (function() {
  // Create the <style> tag
  var style = document.createElement('style');

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute('media', 'screen')
  // style.setAttribute('media', 'only screen and (max-width : 1024px)')

  // WebKit hack :(
  style.appendChild(document.createTextNode(''));

  // Add the <style> element to the page
  document.head.appendChild(style);

  return style.sheet;
})();
