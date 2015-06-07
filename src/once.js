// Once
//
// @see http://davidwalsh.name/essential-javascript-functions#once
//
// Perform a function once and only once
//
// Example Usage:
// ```js
// var canOnlyFireOnce = once(function() {
//   console.log('Fired!');
// });
//
// canOnlyFireOnce(); // "Fired!"
// canOnlyFireOnce(); // nada
// ```
function once(fn, context) { 
  var result;

  return function() { 
    if(fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
}