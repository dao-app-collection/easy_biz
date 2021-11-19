'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Client);
      this.hasMany(models.Deadline);
    }
  };
  Project.init({
    title: {
      type: DataTypes.STRING,
      defaultValue: "New Project"
    },
    feeStructure: {
      type: DataTypes.STRING,
      defaultValue: "hrly"
    }
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};