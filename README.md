# rethrow [![NPM version](https://badge.fury.io/js/rethrow.svg)](http://badge.fury.io/js/rethrow)

> Re-throw an error to get better error reporting for templates.

Based on [rethrow](https://github.com/jadejs/jade/blob/f2a18826a13d52e4038534043dd78f1c3723fa2c/lib/runtime.js#L202)in Jade.

**Example**

[![screen shot 2015-05-24 at 6 29 35 am](https://cloud.githubusercontent.com/assets/383994/7787511/a8b8ab90-01de-11e5-9210-709d19a88223.png)](https://github.com/jadejs/jade/blob/f2a18826a13d52e4038534043dd78f1c3723fa2c/lib/runtime.js#L202)

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i rethrow --save
```

## Usage

```js
var rethrow = require('rethrow');
```

## API

### [rethrow](index.js#L23)

Re-throw the given `err` in context to the offending
template expression in `filename` at the given `lineno`.

**Params**

* `err` **{Error}**: Error object
* `filename` **{String}**: The file path of the template
* `lineno` **{String}**: The line number of the expression causing the error.
* `str` **{String}**: Template string

**Example**

```js
function rethrow(fp, data) {
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
rethrow('test/fixtures/a.tmpl', {});
```

## Related projects

* [assemble](http://assemble.io): Static site generator for Grunt.js, Yeoman and Node.js. Used by Zurb Foundation, Zurb Ink, H5BP/Effeckt,… [more](http://assemble.io)
* [template](https://github.com/jonschlinkert/template): Render templates using any engine. Supports, layouts, pages, partials and custom template types. Use template… [more](https://github.com/jonschlinkert/template)
* [verb](https://github.com/assemble/verb): Documentation generator for GitHub projects. Extremely powerful, easy to use, can generate anything from API… [more](https://github.com/assemble/verb)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/rethrow/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on May 24, 2015._