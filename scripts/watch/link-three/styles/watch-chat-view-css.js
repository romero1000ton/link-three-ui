/**
 * @author milton.romero
 */
module.exports = () => {
  'use strict';

  const gulp = require('gulp');
  const runSequence = require('gulp4-run-sequence');

  const CONFIG = require('../../../link-three-view/build/config/config.json');
  const DEPLOY = require('../../../link-three-view/build/config/deploy-to');

  gulp.task('link-three-view:styles-css-deploy-to', () => {
    return gulp.src([
      CONFIG.folder.target.distCss + '/*.css'
    ]).pipe(gulp.dest(DEPLOY.deployTo + '/' + CONFIG.package + '/' + 'styles'));
  });

  gulp.task('link-three-view:styles-images-deploy-to', () => {
    return gulp.src([
      CONFIG.folder.project.assets.images + '/*.svg'
    ]).pipe(gulp.dest(DEPLOY.deployTo + '/' + CONFIG.package + '/' + 'images'));
  });

  gulp.watch(CONFIG.folder.project.path + '/**/*.*').on('change', () => {
    runSequence('link-three-view:styles', 'link-three-view:styles-css-deploy-to', 'link-three-view:styles-images-deploy-to');
  });
};

