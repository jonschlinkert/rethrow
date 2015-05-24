'use strict';

var fs = require('fs');
var _ = require('lodash');
var rethrow = require('./');

function file(fp, data) {
  var str = fs.readFileSync(fp, 'utf8');
  var res = '';
  str.split('\n').forEach(function (line, i) {
    try {
      res += _.template(line)(data);
    } catch(err) {
      rethrow(err, fp, i, str);
    }
  });
  return res;
}

// file('test/fixtures/a.tmpl', {});

module.exports = file;
