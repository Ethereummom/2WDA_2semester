const Sequelize = require('sequelize');

class Admin extends Sequelize.Model {
  static initiate(sequelize) {
    Admin.init({
      adminid: {
        type: Sequelize.INTEGER(40),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique:true,
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    }, {
      sequelize,
      underscored: false,
      modelName: 'Admin',
      tableName: 'admins',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.Admin.hasMany(db.User);
  }
};

module.exports = Admin;