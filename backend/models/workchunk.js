'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkChunk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  WorkChunk.init({
    invoiced: DataTypes.BOOLEAN,
    date: DataTypes.DATEONLY,
    hrs: DataTypes.FLOAT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'WorkChunk',
  });
  return WorkChunk;
};