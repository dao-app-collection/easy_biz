'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deadline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Project);
    }
  };
  Deadline.init({
    title: {
      type: DataTypes.STRING,
      defaultValue: "New Deadline"
    },
    date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Deadline',
  });
  return Deadline;
};