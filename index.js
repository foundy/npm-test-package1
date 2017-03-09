'use strict';

module.exports = function () {
  var span = document.createElement('span');
  span.setAttribute('style', 'color:blue');
  span.textContent = 'Component : npm-test-pakcage1';

  var div = document.createElement('div');
  div.appendChild(span);

  return div;
};