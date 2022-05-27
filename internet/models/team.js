'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Player, {foreignKey: 'teamId', as: 'Players'});
    }
  }
  Team.init({
    Name: DataTypes.STRING,
    Logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};