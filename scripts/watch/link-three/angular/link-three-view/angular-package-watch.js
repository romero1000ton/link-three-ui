/**
 * @author milton.romero
 */
(() => {
  'use strict';

  const run = require('gulp-run');

  module.exports = () => {
    return run(`ng build link-three-view --configuration development --watch`, {verbosity: 3}).exec();
  }
})();
