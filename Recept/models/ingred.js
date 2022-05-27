'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingred extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingred.init({
    Name: DataTypes.STRING,
    kolvo: DataTypes.INTEGER,
    receptId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ingred',
  });
  return Ingred;
};