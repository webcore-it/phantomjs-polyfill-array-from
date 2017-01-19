# phantomjs-polyfill-array-from
A PhantomJS polyfill for Array.prototype.from. Based on MDN specification.

## Installation

```
npm install --save-dev phantomjs-polyfill-array-from
```

## Usage

```
require('phantomjs-polyfill-array-from')
```

### Usage with Karma

Include the polyfill directly in the files list of your karma.conf
```
...
files: [
  './node_modules/phantomjs-polyfill-array-from/array-from-polyfill.js',
  ...
]
...
``