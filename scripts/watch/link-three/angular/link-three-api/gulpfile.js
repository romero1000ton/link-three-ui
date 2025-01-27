/**
 * @author milton.romero
 */
module.exports = () => {
  'use strict';

  const gulp = require('gulp');

  const angularPackageWatch = require('./angular-package-watch');

  gulp.task('watch-link-three-api:angular', angularPackageWatch);

};

