'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/update', controller.home.updatePage);
  router.get('/delete', controller.home.deletePost);

  router.post('/submit', controller.home.createPost);
  router.post('/submit-update', controller.home.updatePost);

  router.resources('users', '/users', controller.users);
};
