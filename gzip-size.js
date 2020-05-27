const gzipSize = require('gzip-size');
const fs = require('fs');

fs.readFile('dist/mittt.cjs.production.min.js', 'utf8', function(
  err,
  contents
) {
  console.log(contents);
  console.log('gzip', gzipSize.sync(contents));
});
