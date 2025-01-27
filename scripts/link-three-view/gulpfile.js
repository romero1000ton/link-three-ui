/**
 * @author milton.romero
 */
module.exports = () => {
  'use strict';

  const gulp = require('gulp');

  const angularPackage = require('./build/angular-package');

  const stylesClean = require('./build/styles-clean');
  const stylesCompileScss = require('./build/styles-compile-scss');
  const stylesPackage = require('./build/styles-package');
  const stylesDeployCss = require('./build/styles-deploy-css');
  const stylesDeployImages = require('./build/styles-deploy-images');

  gulp.task('link-three-view:angular-package', angularPackage);

  gulp.task('link-three-view:styles-clean', stylesClean);
  gulp.task('link-three-view:styles-compile-scss', stylesCompileScss);
  gulp.task('link-three-view:styles-package', stylesPackage);
  gulp.task('link-three-view:styles-deploy-css', stylesDeployCss);
  gulp.task('link-three-view:styles-deploy-images', stylesDeployImages);

  gulp.task('link-three-view:styles-deploy', gulp.series(
      'link-three-view:styles-deploy-css',
      'link-three-view:styles-deploy-images'
  ));

  gulp.task('link-three-view:angular', gulp.series(
      'link-three-view:angular-package'
  ));

  gulp.task('link-three-view:styles', gulp.series(
      'link-three-view:styles-clean',
      'link-three-view:styles-compile-scss',
      'link-three-view:styles-package',
      'link-three-view:styles-deploy'
  ));

  gulp.task('link-three-view', gulp.series(
      'link-three-view:angular',
      'link-three-view:styles'
  ));
};
