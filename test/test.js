'use strict';

/* deps: mocha */
var rethrow = require('../example');
require('should');

describe('rethrow', function () {
  it('should re-throw an error:', function () {
    (function () {
      rethrow('test/fixtures/a.tmpl', {});
    }).should.match(/> 6| <%= name %>/);
  });
});
