'use strict';

module.exports = (app) => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const User = app.model.define('comments', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(100),
    message: TEXT,
    updated_at: DATE,
    created_at: DATE,
  });

  return User;
};