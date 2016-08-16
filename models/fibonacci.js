"use strict";

module.exports = function(sequelize, DataTypes) {

  var Fibonacci = sequelize.define('Fibonacci', {
    iterations: DataTypes.INTEGER,
    result: DataTypes.INTEGER.UNSIGNED
  }, {
    freezeTableName: true,
    tableName: 'fibonacci'
  });

  return Fibonacci;
};
