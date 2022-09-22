/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.njk': 'nunjucks',
      },
    },
    sequelize : {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'MessageBoard',
      username: 'root', // 数据库用户名
      password: '12345678', // 数据库密码
      timezone: '+08:00', // 设置时区

      dialectOptions: {
        dateStrings: true,
        typeCast: true
      }
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1663833051718_7213';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
