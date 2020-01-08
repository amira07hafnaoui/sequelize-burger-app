const Sequelize = require('sequelize')
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
  class burgers extends Model {}
  burgers.init({
   
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
     
    }
  }, {
      sequelize,
      modelName: 'burgers'
      // options
  });
  burgers.sync();
  return burgers;
};