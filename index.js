'use strict';

var common = require('workflow-test-common');

module.exports = function () {
  var span = document.createElement('span');
  span.setAttribute('style', 'color:blue');
  span.textContent = 'Component : npm-test-pakcage1';
  span.textContent += common(span.textContent);

  var div = document.createElement('div');
  div.appendChild(span);

  return div;
};