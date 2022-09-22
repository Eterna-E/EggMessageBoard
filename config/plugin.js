'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  equelize : {
    enable: true,
    package: 'egg-sequelize',
  },
  nunjucks : {
    enable: true,
    package: 'egg-view-nunjucks',
  }
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};
