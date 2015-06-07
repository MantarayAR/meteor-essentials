// Debounce
// 
// @see http://davidwalsh.name/essential-javascript-functions#debounce
//
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
//
// The debounce function will not allow a callback to be used more than once
// per given time frame.  This is especially important when assigning a 
// callback function to frequently-firing events.
//
// Example Usage:
// ```js
// var myEfficientFn = debounce(function() {
// }, 250);
// ```
window.addEventListener('resize', myEfficientFn);
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
