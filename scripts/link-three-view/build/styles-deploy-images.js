/**
 * @author milton.romero
 */
(() => {
  'use strict';

  const CONFIG = require('./config/config.json');
  const gulp = require('gulp');

  module.exports = () => {
    return gulp.src([
      CONFIG.folder.project.assets.images + '/*.svg',
    ]).pipe(gulp.dest(CONFIG.folder.dist.library.images));
  }
})();

