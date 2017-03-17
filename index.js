'use strict';

var common = require('workflow-test-common');

module.exports = function () {
  var div = document.createElement('div');
  div.setAttribute('style', 'color:blue');
  div.textContent = 'Component : workflow-test-pakcage1';

  var component = document.createElement('div');
  component.appendChild(div);

  // common
  component.appendChild(common('workflow-test-package1'));

  return component;
};