/**
 * @author milton.romero
 */
module.exports = () => {
  'use strict';

  require("./link-three/gulpfile")();
  require("./link-three-api/gulpfile")();
  require("./link-three-core/gulpfile")();
  require("./link-three-view/gulpfile")();
};

