const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init({
      usernumber: {
        type: Sequelize.INTEGER(40),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      phonenumber: {
        type: Sequelize.STRING(12),
        allowNull: true,
        unique : true,
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      point: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }, {
      sequelize,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.User.belongsTo(db.Admin, {
      foreignKey: 'adminId' 
    });
  }
};

module.exports = User;