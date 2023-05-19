const Sequelize = require('sequelize');

class Admin extends Sequelize.Model {
  static initiate(sequelize) {
    Admin.init({
      aid: {
        type: Sequelize.INTEGER(40),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nickname: {
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
      timestamps: true,
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