'use strict';

var fs = require('fs');
var _ = require('lodash');
var rethrow = require('./')();

function render(fp, data) {
  var str = fs.readFileSync(fp, 'utf8');
  var re = /<%=([\s\S]+?)%>/g;
  var res = '';
  str.replace(re, function(match, prop, i) {
    try {
      res += _.template(match)(data);
    } catch (err) {
      var before = str.slice(0, i);
      var lineno = before.split('\n').length - 1;
      rethrow(err, fp, lineno, str);
    }
  });
  return res;
}

render('test/fixtures/each.tmpl', {});


module.exports = render;
