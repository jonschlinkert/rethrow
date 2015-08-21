'use strict';

/* deps: mocha */
require('should');
var rethrow = require('../')();
var engine = require('engine')()

describe('rethrow', function () {
  it('should re-throw the error string:', function () {
    try {
      engine.render('\n\n\n<%= name %>', {});
    } catch(err) {
      rethrow(err, 'string', 3, '\n\n\n<%= name %>', {});
    }
  });
});
